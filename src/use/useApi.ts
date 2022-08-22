import { ref, Ref } from 'vue';
import { IStrain } from "@/@types/interfaces/strain.interface";
import { fetchStrains } from '@/services/api';
import { IResponseData } from '@/@types/interfaces/response.interface';

export const Status = {
	IDLE: "IDLE",
	RUNNING: "RUNNING",
	SUCCESS: "SUCCESS",
	ERROR: "ERROR",
};
export default async function useApi(url?: string) {
	const currentData = ref({} as IResponseData<IStrain>)
	const status = ref(Status.IDLE)

	if (!currentData.value.data?.length) {
		await refetchData()
	}

	async function fetchData (): Promise<IResponseData<IStrain>> {
		status.value = Status.RUNNING;
		try {
			const res = await fetchStrains()
			if (!res.data?.length) {
				status.value = Status.ERROR;
				throw new Error(`${Status.ERROR} - Fetching Data`);
			}
			status.value = Status.SUCCESS;
			return res;
		} catch (err) {
			const typeError = err as TypeError;
			status.value = Status.ERROR;
			throw new Error(typeError.message);
		}
	}

	async function fetchFakeStrains(): Promise<IResponseData<IStrain>> {
		try {
			const res = await fetch('./mocked/strains-data.json')
			const result = await res.json() as IResponseData<IStrain>
			console.log(result)
			return result;
		} catch (err) {
			const typeError = err as TypeError;
            status.value = Status.ERROR;
            throw new Error(typeError.message);
		}
	}

	async function refetchData (): Promise<Ref<IResponseData<IStrain>>> {
		currentData.value = await fetchData() as IResponseData<IStrain>
		return currentData
	}


	return {
		currentData,
		status,
		refetchData,
		fetchFakeStrains,
	}
}
