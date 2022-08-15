import { defineStore, _GettersTree, _ActionsTree } from 'pinia';
import { type IStrain, type IStrainState, state } from '@/@types/interfaces/strain.interface';
import type { StoreReturnType, StringNumber } from '@/@types/index';
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
	},
	actions: {
		// async
	},
});

