import { defineStore, _GettersTree, _ActionsTree, _Method } from 'pinia';

// Navigation State
export interface INavState {
	isNavOpen: boolean;
	isSideNavOpen: boolean;
}
/**
 * Navigation Default State
 */
export const navState: INavState = {
	isNavOpen: false,
	isSideNavOpen: false,
};
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
			this.$patch((state: INavState): void =>  {
				state.isNavOpen = !state.isNavOpen
			});
		},
	},
});


