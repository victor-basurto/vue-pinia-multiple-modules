<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRootStore } from '@store/useRootStore'
import { useModalStore } from '@store/useModalStore'
import type { ModalInfoType } from '@/@types/interfaces/modal.interface'
import Modal from '@components/base/modal/Modal.vue'
import Form from '@components/base/form/Form.vue'



defineProps<{ msg: string }>();

const rootStore = useRootStore()
const modalStore = useModalStore()
const { getCurrentVersionMsg, isMobile, loading, darkMode, colorScheme } =  storeToRefs(rootStore)
const { showModal, editModalById, showCreateModal } = storeToRefs(modalStore)

const { setIsMobile } = rootStore;

const closingModal = (o: ModalInfoType) => {
	console.log('parent handler ', o.modalInfo)
	editModalById.value = o.modalId
	showModal.value = false
}

const openModal = () => showModal.value = true

</script>

<template>
	<button id="open-modal" @click="openModal">open modal</button>
	<Modal modalId="generic-modal" headerInfo="header information" :showModal="showModal" @close="closingModal">
		<template #header>
			<div>
				This is the template for the header
			</div>
		</template>
		<template #body>
			<Form />
		</template>
	</Modal>
	<div>
		{{ getCurrentVersionMsg }} <br>
		<span>Is Mobile?: <strong>{{ (isMobile).toString().toUpperCase() }}</strong></span> <br>
		<span>Is Loading: {{ loading }}</span> <br>
		<span>Is Dark Mode enabled?: {{ darkMode }}</span> <br>
		<span>Current Color Scheme Type: {{ colorScheme }}</span>
	</div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="setIsMobile(true)">is mobile</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
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
