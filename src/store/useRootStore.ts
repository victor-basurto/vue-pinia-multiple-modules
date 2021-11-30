import { defineStore, _GettersTree, _ActionsTree } from 'pinia';
import { IRootState } from './modules/root-store/root-store.interface';

// Root State
export const state: IRootState = {
	version: '1.0.0',
	isMobile: false,
	loading: false,
	showCreateModal: false,
	showEditModal: false,
	showModal: false,
	editModalById: null,
	darkMode: false,
	colorSchemeDark: 'LIGHT',
};

export interface IGetters extends _GettersTree<IRootState> {
	getCurrentVersionMsg: (state: IRootState) => string;
};
export interface IActions extends _ActionsTree {
	setVersion(version: string): void;
	setIsMobile(isMobile: boolean): void;
	setLoading(loading: boolean): void;

	// move to its own store
	setShowCreateModal(showCreateModal: boolean): void;
	setShowEditModal(showEditModal: boolean): void;
	setShowModal(showModal: boolean): void;
	setEditModalById(editModalById: null): void;

	setDarkMode(darkMode: boolean): void;
};

export const useRootStore = defineStore('rootStore', {
	state: () => (state as IRootState),
	getters: {
		getCurrentVersionMsg: (state: IRootState) => `Current Version: ${state.version}`
	} as IGetters,
	actions: {
		setVersion(version: string = state.version): void {
			this.$patch((state: IRootState) => state.version = version);
		},
		setIsMobile(isMobile: boolean): void {
			this.$patch((state: IRootState) => state.isMobile = isMobile);
		},
		setLoading(loading: boolean): void {
			this.$patch((state: IRootState) => {
				state.loading = loading;
			});
		},
		setShowCreateModal(showCreateModal: boolean): void {
			this.$patch((state: IRootState) => {
				state.showCreateModal = showCreateModal;
			});
		},
		setShowEditModal(showEditModal: boolean): void {
			this.$patch((state: IRootState) => {
				state.showEditModal = showEditModal;
			});
		},
		setShowModal(showModal: boolean): void {
			this.$patch((state: IRootState) => {
				state.showModal = showModal;
			});
		},
		setEditModalById(editModalById: null): void {
			if (editModalById === null) {
				return;
			}
			this.$patch((state: IRootState) => {
				state.editModalById = editModalById;
			});
		},
		setDarkMode(darkMode: boolean): void {
			this.$patch((state: IRootState) => {
				state.darkMode = darkMode;
			});
		},

	} as IActions,
})

