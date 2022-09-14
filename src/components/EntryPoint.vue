<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRootStore } from '@store/useRootStore'
import { useModalStore } from '@store/useModalStore'
import type { ModalInfoType } from '@/@types/interfaces/modal.interface'
import Modal from '@components/base/modal/Modal.vue'
import Form from '@components/base/form/Form.vue'
import { useStrainStore } from '@/store/useStrainStore'
import { useLoadingStore } from '@/store/useLoadingStore'


defineProps<{ msg: string }>();

const StrainCard = defineAsyncComponent(() => import('@components/strain/StrainCard.vue'))
const Button = defineAsyncComponent(() => import('@components/base/Button.vue'))

const rootStore = useRootStore()
const modalStore = useModalStore()
const strainStore = useStrainStore()
const loadingStore = useLoadingStore()
const { getCurrentVersionMsg, isMobile, darkMode, colorScheme } =  storeToRefs(rootStore)
const { showModal, editModalById, showCreateModal } = storeToRefs(modalStore)
const { strains, allStrainsTotal } = storeToRefs(strainStore)
const { getStrainsFromMocked } = strainStore
const { isLoading } = storeToRefs(loadingStore)

const { setIsMobile } = rootStore;

const modalName = ref('')

const closingModal = (o: ModalInfoType) => {
	console.log('parent handler ', o.modalInfo)
	editModalById.value = o.modalId
	showModal.value = false
}

type OpenModal = {modalName: string}
const openModal = (o: OpenModal) => {
	console.log('parent')
	// modalName.value = o.modalName;
	// showModal.value = true;
	// return showModal.value;
};

// const openModal = (name: string) => {
// 	modalName.value = name
// 	showModal.value = true
// 	return showModal.value
// }

onMounted(async () => await getStrainsFromMocked())
</script>

<template>
	<div class="mb-8">
		<div v-if="isLoading">
			<!-- TODO: create Loading component -->
			LOADING.....
		</div>
		<div v-else>
			loaded: {{ allStrainsTotal }} strains in total
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
			<StrainCard
				v-for="(strain, index) in strains"
				:index="index"
				:strain="strain"
			/>
		</div>
	</div>

	<div>
		{{ getCurrentVersionMsg }} <br>
		<span>Is Mobile?: <strong>{{ (isMobile).toString().toUpperCase() }}</strong></span> <br>
		<span>Is Loading: {{ isLoading }}</span> <br>
		<span>Is Dark Mode enabled?: {{ darkMode }}</span> <br>
		<span>Current Color Scheme Type: {{ colorScheme }}</span>
	</div>
	<p>Recommended IDE setup: <a class="text-green-500" href="https://code.visualstudio.com/" target="_blank">VSCode</a> + <a class="text-green-500" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a></p>
	<p>See <code>README.md</code> for more information.</p>
	<p><a class="text-green-500" href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> | <a class="text-green-500" href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a></p>

	<button type="button" @click="setIsMobile(true)">is mobile</button>

	<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

	<Modal
		modalId="generic-modal"
		headerInfo="Strains Rating Form"
		:showModal="showModal"
		@close="closingModal"
		@open="openModal"
		>
		<template #header>
			<div class="text-center"><small>{{ modalName }}</small></div>
		</template>
		<template #body>
			<Form />
		</template>
	</Modal>
</template>

<style scoped>
img.rounded-t-lg {
	max-height: 250px;
	margin: auto;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 1s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

}
</style>
