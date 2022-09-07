<script setup lang="ts">
import { defineProps, toRefs, computed } from 'vue';
type BtnType = "button" | "submit" | "reset" | undefined
type BtnColorType = "primary" | "secondary" | "danger" | "plain" | undefined

const props = defineProps<{
	className: string,
	btnType: BtnType,
	// btnColor: BtnColorType,
	// btnColorHover: string,
	// textColor: string,
	// textColorHover: string,
}>()
// const { btnColorType } = toRefs(props)
// const getBtnColor = computed(() => {
// 	let color = '';
// 	switch(btnColorType.value) {
// 		case 'danger':
// 			color = 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
// 			break;
// 		case 'primary':
// 			color = 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
// 			break;
// 		case 'plain':
// 			color = 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
// 			break;
// 		default:
// 			color = 'bg-gradient-to-r from-indigo-800 to-purple-800'
// 			break;
// 	}
// 	return color
// })


</script>

<template>
	<button :type="props.btnType" class="w-full inline-flex justify-center shadow-sm px-4 py-2 sm:ml-3 sm:w-auto sm:text-sm rounded" :class="props.className">
		<slot />
	</button>
</template>


<style scoped>
</style>
