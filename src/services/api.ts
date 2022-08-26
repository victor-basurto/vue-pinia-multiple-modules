import strainsMockedData from './mocked/strains-data.json'
import type { IStrain } from '@/@types/interfaces/strain.interface';
import { type IResponseData } from '@/@types/interfaces/response.interface';

const JSON_DATA = strainsMockedData as IStrain[]

const strains: IResponseData<IStrain> = {
	data: [] as IStrain[],
	dataErrorStatus: {
		message: 'Strains Loaded'
	}
}
/**
 * @description Mock API for fetching Strains
 * @date 08/15/2022
 * @param {T[]} payload
 * @returns {Promise<Strains>} Promise\<Strains\>
 * @example import { fetchStrains } from '@/services/mocked/index.ts';
 *	import { apiStatusType } from './../@types/interfaces/response.interface';
 *	fetchStrains().then(res => {
 *	  console.log(res);
 * });
 */
const fetch = async <T>(payload: IResponseData<T>): Promise<IResponseData<T>> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(payload as IResponseData<T>)
		}, 1000);
	})
}

export const fetchStrains = async (): Promise<IResponseData<IStrain>> => {
	Object.assign(strains.data as IStrain[], [] as IStrain[])
	strains.data = JSON_DATA;
	return await fetch<IStrain>(strains)
}
