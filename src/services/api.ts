import strainsMocked from './mocked/strains-data.json';
import type { IStrain } from '@/@types/interfaces/strain.interface';
import { type IResponseData } from '@/@types/interfaces/response.interface';

const JSON_DATA = strainsMocked as IStrain[];

const strains: IResponseData<IStrain> = {
	data: [] as IStrain[],
	dataErrorStatus: {
		message: 'Bad Request'
	}
}
/**
 * @description Mock API for fetching Strains
 * @date 08/15/2022
 *
 * @param {T[]} data
 * @returns {Promise<Strains>} Promise\<Strains\>
 * @example
 * import { fetchStrains } from '@/services/mocked/index.ts';
 * import { apiStatusType } from './../@types/interfaces/response.interface';
fetchStrains().then(res => {
 *  	console.log(res);
 *  });
 */
const fetch = <T>(payload: IResponseData<T>): Promise<IResponseData<T>> => {
	return new Promise((resolve, reject) => {
		if (!strains.data) {
			reject(strains.dataErrorStatus);
		}
		setTimeout(() => {
			resolve(payload)
		}, 1000);
	})
}

export const fetchStrains = (): Promise<IResponseData<IStrain>> => {
	Object.assign(strains.data as IStrain[], [] as IStrain[])
	strains.data = JSON_DATA;
	return fetch<IStrain>(strains)
}
