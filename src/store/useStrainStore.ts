import { defineStore, _GettersTree, _ActionsTree } from 'pinia';
import { type IStrain, type IStrainState, state } from '@/@types/interfaces/strain.interface';
import type { StoreReturnType, StringNumber } from '@/@types/index';
import { IResponseData } from '@/@types/interfaces/response.interface';
import { fetchStrains } from '@/services/api';
import { useLoadingStore } from './useLoadingStore';
import useApi, {Status} from '@/use/useApi';
/**
 * @type {id} - strainStore
 * @type {options} - store options
	* @type {state} - IStrainState
 */
export const useStrainStore = defineStore('strainStore', {
	state: () => (state as IStrainState),
	getters: {
		/**
		 * Get Strains by Id
		 * @param state Current State IStrainState
		 * @returns {IStrain[]} matched array
		 */
		 strainsById: (state: IStrainState): StoreReturnType<IStrain[], StringNumber> => (strainId: StringNumber): IStrain[] => {
			return state.strains.filter((strain: IStrain): boolean => strain.name === strainId) as IStrain[]
		},
		/**
		 * Get All Strains
		 * @param state Current State IStrainState
		 * @returns IStrain[]
		 */
		 allStrains: (state: IStrainState): IStrain[] => state.strains,
		 /**
		 * Get Strains Total
		 * @param state Current State IStrainState
		 * @returns {number} total of strains
		 */
		allStrainsTotal: (state: IStrainState): number => state.strains.length,
		/**
		 * Get all favorite Strains
		 * @param state Current State IStrainState
		 * @returns {IStrain[]} strains with Favorites
		 */
		starredStrains: (state: IStrainState): IStrain[] => state.strains.filter((strain: IStrain): boolean => strain.favs),
	},
	actions: {
		async getStrains() {
			const loadingStore = useLoadingStore();
			const { setLoading } = loadingStore;

			setLoading(true)
			try {
				const response: IResponseData<IStrain> = await fetchStrains();
				this.strains = response.data as IStrain[];

			} catch(e) {
				const typeError = e as TypeError;
				this.dataError!.message = typeError.message;
			} finally {
				setLoading(false);
			}
		},
		/**
		 * @description Manually load all the Strains from the HOOK API
		 * @return {Promise<IStrainState>} Promise resolved with all the Strains
		 */
		async getStrainsFromMocked() {
			// TODO: check if strains exists in localStorage
			const loadingStore = useLoadingStore();
			const { setLoading } = loadingStore;
			setLoading(true);
			try {
				let { currentData, status, fetchFakeStrains } = await useApi();
				if (status.value === Status.SUCCESS)
					this.strains = currentData.value.data as IStrain[];
				fetchFakeStrains();

			} catch(e) {
				const typeError = e as TypeError;
				this.dataError!.message = typeError.message;
			} finally {
				setLoading(false);
				console.log(this.strains)
			}
		},
		starredStrain(id: number) {
			// TODO: add strain to localStorage
			const existingStrain = this.strains[this.strains.findIndex(str => str.id === id)];
			if (typeof existingStrain === 'undefined') return;
			if (!existingStrain.favs) {
				console.log('is false: ', existingStrain.favs)
				existingStrain.favs = true;
				return;
			}
			return existingStrain.favs = false;

		}
	},
});

