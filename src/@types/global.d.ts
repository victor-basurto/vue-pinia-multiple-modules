export type DarkLightModeColor = 'DARK' | 'LIGHT';
export type StringNumber = string | number;
export type StoreReturnType<T, E> = (param: E) => T;
declare global {
	interface Window {
		mobileCheck: Function;
	}
  }
