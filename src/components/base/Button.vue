<script setup lang="ts">
import { toRefs, computed } from 'vue';
type BtnType = "button" | "submit" | "reset" | undefined
type BtnColorType = "primary" | "secondary" | "danger" | "plain" | undefined

interface IButton {
	btnType?: BtnType;
	btnColorType?: BtnColorType;
}

const props = defineProps<IButton>()
const { btnColorType, btnType } = toRefs(props)
const getBtnColor = computed((): string => {
	let color = 'bg-gradient-to-r from-indigo-800 to-purple-800';
	if (typeof btnColorType?.value === 'undefined' || btnColorType?.value === 'secondary') return color;
	switch(btnColorType.value) {
		case 'danger':
			color = 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500'
			break;
		case 'primary':
			color = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700'
			break;
		case 'plain':
			color = 'text-gray-700 bg-white hover:bg-gray-50 border-gray-300'
			break;
		default:
			color;
			break;
	}
	return color
})
</script>

<template>
	<button :type="btnType" class="w-full inline-flex justify-center shadow-sm px-4 py-2 sm:ml-3 sm:w-auto sm:text-sm border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-offset-2 text-base font-medium" :class="getBtnColor">
		<slot />
	</button>
</template>


<style scoped>
</style>
