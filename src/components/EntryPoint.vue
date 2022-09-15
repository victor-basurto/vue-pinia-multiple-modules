<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRootStore } from '@store/useRootStore'
import { useModalStore } from '@store/useModalStore'
import type { ModalInfoType } from '@/@types/interfaces/modal.interface'
import Modal from '@components/base/modal/Modal.vue'
import Form from '@components/base/form/Form.vue'
import { useStrainStore } from '@/store/useStrainStore'
import { useLoadingStore } from '@/store/useLoadingStore'
import { StarIcon } from '@heroicons/vue/24/outline'
import { IStrain } from '@/@types/interfaces/strain.interface'

defineProps<{ msg: string }>();

const rootStore = useRootStore()
const modalStore = useModalStore()
const strainStore = useStrainStore()
const loadingStore = useLoadingStore()
const { getCurrentVersionMsg, isMobile, darkMode, colorScheme } =  storeToRefs(rootStore)
const { showModal, editModalById, showCreateModal } = storeToRefs(modalStore)
const { strains, allStrainsTotal, isFavStrain, starredStrains } = storeToRefs(strainStore)
const { getStrainsFromMocked, starredStrain } = strainStore
const { isLoading } = storeToRefs(loadingStore)

const { setIsMobile } = rootStore;

const modalName = ref('')
const favs = ref<IStrain[]>([])

const closingModal = (o: ModalInfoType) => {
	console.log('parent handler ', o.modalInfo)
	editModalById.value = o.modalId
	showModal.value = false
}

const openModal = (name: string) => {
	modalName.value = name;
	showModal.value = true;
	return showModal.value;
}
const getAllStarred = () => {
	console.log(starredStrains)
	return starredStrains
}

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
		<button @click="getAllStarred">
			all favs
		</button>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
			<div v-for="(strain, index) in strains" :key="index"
				class="max-w-sm relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 bg-white dark:border-gray-700">
				<div class="fav-container w-6 absolute right-0" @click="starredStrain(strain.id)">
					<StarIcon class="text-yellow-400" :class="strain.favs ? 'starred' : ''"></StarIcon>
				</div>
				<a href="#">
					<img class="rounded-t-lg" :src="strain.image" alt="" />
				</a>
				<div class="p-5">
					<a href="#">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ strain.name }}</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ strain.description.excerpt }}</p>
					<a href="#"
						class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Read more
						<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"></path>
						</svg>
					</a>
					<button class="px-3 py-2 text-white bg-gradient-to-r from-indigo-800 to-purple-800 shadow-lg rounded text-sm ml-3"
						id="open-modal" @click="openModal(strain.name)">
						open modal
					</button>
				</div>
			</div>
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

	<Modal modalId="generic-modal" headerInfo="Strains Rating Form" :showModal="showModal" @close="closingModal">
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
.starred {
	fill: yellow;
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
.modal-leave-active { transition: opacity 1s ease; }

.modal-enter-from,
.modal-leave-to { opacity: 0;}
</style>
