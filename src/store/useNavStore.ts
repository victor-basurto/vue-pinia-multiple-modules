import { defineStore, _GettersTree, _ActionsTree, _Method } from 'pinia';
import { type INavState, navState } from '@/@types/interfaces/nav-interface';
/**
 * Defined Navigation Store
 * @date 12/7/2021 - 4:44:39 PM
 *
 * @type {id} - store id
 * @type {options} - store options
	* @type {state} - INavState
 */
export const useNavStore = defineStore('navStore',{
	state: () => ( navState as INavState),
	actions: {
		toggleNav(): void {
			/**
			 * Mutate state
			 * @param state - INavState
			 * sets isNavOpen to the opposite of its current value
			 */
			this.isNavOpen = !this.isNavOpen
		},
	},
});


