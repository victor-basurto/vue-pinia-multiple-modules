import { defineStore, _GettersTree, _ActionsTree, Pinia, _Method } from 'pinia';

export interface IModalState {
	modalInfo: string,
	showCreateModal: boolean,
	showEditModal: boolean,
	showModal: boolean,
	editModalById: string,
}

// Modal State
export const state: IModalState = {
	modalInfo: '',
	showCreateModal: false,
	showEditModal: false,
	showModal: false,
	editModalById: '',
};
/**
 * Defined Navigation Store
 * @date 12/7/2021 - 4:44:39 PM
 *
 * @type {id} - modalStore
 * @type {options} - store options
	* @type {state} - IModalState
 */
export const useModalStore = defineStore('modalStore', {
	state: () => (state as IModalState),
	getters: {
		currentModalStatus: (state: IModalState) => `${state.modalInfo}`,
	} ,
	actions: {
		setShowCreateModal(showCreateModal: boolean): void {
			this.$patch((state: IModalState): void => {
				state.showCreateModal = showCreateModal;
			});
		},
		setShowEditModal(showEditModal: boolean): void {
			this.$patch((state: IModalState): void => {
				state.showEditModal = showEditModal;
			});
		},
		setShowModal(showModal: boolean): void {
			this.$patch((state: IModalState): void => {
				state.showModal = showModal;
			});
		},
		setEditModalById(editModalById: string): void {
			this.$patch((state: IModalState): void => {
				state.editModalById = editModalById;
			});
		},

	},
})

