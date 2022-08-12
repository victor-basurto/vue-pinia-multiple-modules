import { defineStore, _GettersTree, _ActionsTree } from 'pinia';
import { type IRootState, state } from '@/@types/interfaces/root.interface';

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
		},
		setVersion(currentVersion: string): void {
			this.version = currentVersion
		}
	},
})

