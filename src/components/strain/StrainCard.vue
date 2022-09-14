<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { IStrain } from "@/@types/interfaces/strain.interface";
import { useModalStore } from "@store/useModalStore";
import type { ModalInfoType } from "@/@types/interfaces/modal.interface";
import { useStrainStore } from "@/store/useStrainStore";
import { useLoadingStore } from "@/store/useLoadingStore";

const modalStore = useModalStore();
const strainStore = useStrainStore();
const loadingStore = useLoadingStore();

const { showModal, editModalById, showCreateModal } = storeToRefs(modalStore);
const { strains, allStrainsTotal } = storeToRefs(strainStore);
const { getStrainsFromMocked } = strainStore;
const { isLoading } = storeToRefs(loadingStore);

const Button = defineAsyncComponent(
	() => import("@components/base/Button.vue")
);

const props = defineProps<{
	strain: IStrain;
}>();

type OpenModal = {modalName: string}



// const modalName = ref("");
// const openModal = (name: string) => {
// 	modalName.value = name;
// 	showModal.value = true;
// 	return showModal.value;
// };

const emits = defineEmits(['open'])
const someName = ref('')
const open = () => {
	// someName.value = name;
	emits('open')
	// console.log('open', name)
}

</script>
<template>
	<div class="space-y-2">
		<div class="group relative space-y-3">
			<div class="max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 bg-white dark:border-gray-700">
				<img
					:src="props.strain.image"
					:alt="props.strain.name"
					class="w-full h-full object-center object-cover lg:w-full lg:h-full"
				/>
			</div>
			<div class="mt-4 flex justify-between">
				<div class="p-5">
					<a href="#">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{{ strain.name }}
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{{ strain.description.excerpt }}
					</p>
					<a
						href="#"
						class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Read more
						<svg
							aria-hidden="true"
							class="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd">
							</path>
						</svg>
					</a>
					<Button
						btnType="button"
						id="open-modal"
						@click="open"
						>open modal</Button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
