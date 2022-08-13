import type { IStrain } from '@/@types/interfaces/strain.interface';
import type { ApiStatusType } from '../api';

export const apiStatausType: ApiStatusType = {
	IDLE: 'IDLE',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR'
}

export default interface IResponseData {
	data: IStrain[];
	status: string
}

