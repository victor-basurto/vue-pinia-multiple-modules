import { ref, onMounted, computed, reactive } from 'vue';
import { useRootStore } from '@/store/useRootStore';
import { storeToRefs } from 'pinia';
import type { IStrain, IStrainState } from '@/@types/interfaces/strain.interface';
import { type IResponseData } from '@/@types/interfaces/response.interface';

import { fetchStrains } from '@/services/api';

export default function useStrains() {
	const strainState = reactive({} as IStrainState)

	const getStrains = async () => {
		strainState.fetching = true;
		try {
			const response: IResponseData<IStrain> = await fetchStrains();

			strainState.strains = response.data as IStrain[];

		} catch(error) {
			const typeError = error as TypeError;
			console.log(typeError.message)
			strainState.dataError = typeError
		} finally {
			strainState.fetching = false;
		}
	}
	onMounted(async () => {
		await getStrains()
	})
	return { strainState }
}
