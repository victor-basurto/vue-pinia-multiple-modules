<template>
	<transition name="modal">
		<div class="modal-mask" :id="modalId" v-show="showModal">
			<div class="modal-wrapper">
				<transition name="modal-container">
					<div v-show="showModal" class="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
						<div class="modal-content px-8 pt-8 pr-8 pl-8 pb-4">
							<div class="modal-header">
								{{ headerInfo }}
								<slot name="header">
									default header
								</slot>
							</div>
							<transition name="body-animate">
								<div class="modal-body">
									<slot name="body">
										default body
									</slot>
								</div>
							</transition>
						</div>
						<div class="modal-footer bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="login">login</button>
							<button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="close" ref="cancelButtonRef">Cancel</button>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
interface IModalProps {
	modalId: string,
	headerInfo: string,
	showModal: boolean,
}
type ModalInfoType = Record<'modalId' | 'modalInfo', string>
/**
 * @description - Default properties
 * @param {IModalProps} props
 * @returns {IModalProps}
 */
const props = withDefaults(defineProps<IModalProps>(), {
	modalId: 'login-modal',
	headerInfo: 'none',
	showModal: false,
})
const { modalId } = toRefs(props)
/**
 * @description - Defined emits
 * @emits - ['close']
 */
const emits = defineEmits(['close'])
/**
 * @description - Modal Info, tells which modal was closed based on ID
 * @returns {string} - modalId
 */
const modalInfo = computed(() => `closed - ${modalId.value}`)
/**
 * @description - Emits `close` event and passes computed `modalInfo`
 */
const close = () => emits('close', {
	modalInfo: modalInfo.value,
	modalId: modalId.value

} as ModalInfoType)

/**
 * @description - Login button
 * @returns {boolean}
 */
const login = (): boolean => {
	console.log(modalId.value)
	return true
}
</script>

<style lang="scss" scoped>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
		.modal-container {
			width: 300px;
			margin: 0px auto;
			background-color: #fff;
			border-radius: 2px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
			font-family: Helvetica, Arial, sans-serif;
			.modal-header h3 {
				margin-top: 0;
				color: #42b983;
			}
			.modal-body { margin: 20px 0; }

			.modal-default-button {
				display: block;
				margin-top: 1rem;
			}
		}
	}

}


.modal-enter-active,
.modal-leave-active { transition: opacity 0.2s ease-in; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-container-enter-active { transition: all 0.3s ease-in .07s; }
.modal-container-leave-active { transition: all 0.3s ease-in; }
.modal-container-enter-from {
	transform: scale(0.3);
	opacity: 0;
}
.modal-container-leave-to {
	transform: scale(0.3);
	opacity: 0;
}
</style>

