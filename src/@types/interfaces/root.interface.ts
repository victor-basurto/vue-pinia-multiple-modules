import type { DarkLightModeColor } from '@@types/index';
export interface IRootState {
	version: string;
	isMobile: boolean;
	loading: boolean,
	darkMode: boolean,
	colorScheme: DarkLightModeColor,
}
export const state: IRootState = {
	version: '1.0.0',
	isMobile: false,
	loading: false,
	darkMode: false,
	colorScheme: 'LIGHT',
};



