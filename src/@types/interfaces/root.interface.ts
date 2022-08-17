import type { DarkLightModeColor } from '@@types/index';
export interface IRootState {
	version: string;
	isMobile: boolean;
	colorScheme: DarkLightModeColor;
}
export const state: IRootState = {
	version: '1.0.0',
	isMobile: false,
	colorScheme: 'LIGHT',
};



