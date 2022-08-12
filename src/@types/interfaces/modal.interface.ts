export type ModalInfoType = Record<'modalId' | 'modalInfo', string>
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
