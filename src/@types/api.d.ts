export type ApiRequest = () => Promise<void>;
export type ApiStatusLoadingTxt = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
export type ApiStatusType = Record<ApiStatusLoadingTxt, ApiStatusLoadingTxt>
