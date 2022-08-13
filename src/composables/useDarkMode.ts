import { ref, onMounted } from 'vue';
import { useRootStore } from '@/store/useRootStore';
import { storeToRefs } from 'pinia';
export function useDarkMode() {
	const rootStore = useRootStore();
	const { darkMode } = storeToRefs(rootStore)
	const { toggleDarkMode } = rootStore;

	// current darkmode state
	const isDarkMode = darkMode;
	/**
	 * @description: when page loads, it will check if darkmode is active
	 * by checking localstorage then it will invoke `setLocalStorageDarkMode()`
	 */
	function checkIfDarkMode() {
		darkMode.value = (localStorage.getItem('dark-mode') === 'true') ?? false;
		setLocaStorageDarkMode(darkMode.value);
	}
	/**
	 * @description: toggles the state of `darkMode` from rootStore then it will
	 * invoke setLocalStorage to inject value into localStorage
	 * @returns void
	 */
	function updateDarkmode(): void {
		toggleDarkMode()
		setLocaStorageDarkMode(darkMode.value)
	}
	/**
	 * @description - setLocalstorage item and sets html `dark` data-theme
	 * @param isDark - boolean
	 * @returns void
	 */
	function setLocaStorageDarkMode(isDark: boolean): void {
		console.log('isDarkmode: ',isDark)
		localStorage.setItem('dark-mode', isDark.toString());
		if ( isDark ) {
			document.documentElement.classList.add( 'dark');
			return;
		}
		document.documentElement.classList.remove('dark');
	}
	onMounted(() => checkIfDarkMode())
	return { isDarkMode, updateDarkmode };
}
