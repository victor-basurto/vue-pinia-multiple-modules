import { defineStore, _GettersTree, _ActionsTree } from 'pinia';
import type { DarkLightModeColor } from '@@types/index';
export interface IRootState {
	version: string;
	isMobile: boolean;
	loading: boolean,
	darkMode: boolean,
	colorSchemeDark: DarkLightModeColor,
};
// Root State
export const state: IRootState = {
	version: '1.0.0',
	isMobile: false,
	loading: false,
	darkMode: false,
	colorSchemeDark: 'LIGHT',
};
/**
 * Defined Navigation Store
 * @date 12/7/2021 - 4:44:39 PM
 *
 * @type {id} - rootStore
 * @type {options} - store options
	* @type {state} - IRootState
 */
export const useRootStore = defineStore('rootStore', {
	state: () => (state as IRootState),
	getters: {
		getCurrentVersionMsg: (state: IRootState) => `Current Version: ${state.version}`
	},
	actions: {
		setIsMobile(isMobile: boolean): void {
			this.isMobile = isMobile
		},
		setLoading(loading: boolean): void {
			this.loading = loading
		},
		setDarkMode(darkMode: boolean): void {
			this.darkMode = darkMode
		}
	},
})

