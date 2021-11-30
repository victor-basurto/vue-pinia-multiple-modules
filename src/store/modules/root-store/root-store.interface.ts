import { DarkLightModeColor } from '@@types/global';
export interface IRootState {
	version: string;
	isMobile: boolean;
	loading: boolean,
	showCreateModal: boolean,
	showEditModal: boolean,
	showModal: boolean,
	editModalById: null,
	darkMode: boolean,
	colorSchemeDark: DarkLightModeColor,
};
