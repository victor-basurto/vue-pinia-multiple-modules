import { defineStore, _GettersTree, _ActionsTree, _Method } from 'pinia';
import { INavState } from './modules/nav-store/nav-store.interface';

/**
 * Navigation Default State
 */
export const navState: INavState = {
	isNavOpen: false,
	isSideNavOpen: false,
};
/**
 * Defined Navigation Actions
 */
export interface INavActions extends _ActionsTree {
	// toggle top navigation
	toggleNav(navState: INavState): void;
}
/**
 * Defined Navigation Store
 * @param id - store id
 * @param options - store options
	* @param state - INavState
	* @param actions - INavActions
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
			this.$patch((state: INavState) =>  state.isNavOpen = !state.isNavOpen);
		},
	} as INavActions,
});
