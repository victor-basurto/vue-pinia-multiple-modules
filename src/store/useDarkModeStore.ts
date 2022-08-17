import { ref } from 'vue';
import { defineStore } from 'pinia';

/**
 * @type {id} - loadingStore
 * @type {options} - store options
 */
export const useDarkModeStore = defineStore('darkModeStore', () => {
	const isDarkMode = ref(false);

	const toggleDarkMode = (): boolean => isDarkMode.value = !isDarkMode.value;

	return { isDarkMode, toggleDarkMode }
});

