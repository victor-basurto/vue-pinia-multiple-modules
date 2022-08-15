export interface IResponseData<T> {
	data?: T[];
	dataErrorStatus?: Partial<TypeError>
}
