<script setup lang="ts">
import "velocity-animate/velocity.ui.min.js";
import { storeToRefs } from 'pinia'
import { useNavStore } from '@/store/useNavStore'
import { useModalStore } from "@/store/useModalStore";
import { useDarkMode } from "@/use/useDarkMode";

const navStore = useNavStore()
const modalStore = useModalStore()

const { showModal } = storeToRefs( modalStore )
const { isNavOpen } = storeToRefs( navStore )
// composable
const { isDarkMode, updateDarkmode } = useDarkMode()

</script>
<template>
	<nav class="flex items-center justify-between flex-wrap p-6 bg-gradient-to-r from-indigo-800 to-purple-800 shadow-lg">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
			<router-link to="/" class="font-semibold text-xl tracking-tight text-white">My Strains</router-link>
		</div>
		<div class="block lg:hidden">
			<button @click="isNavOpen = !isNavOpen" class="flex items-center px-3 py-2 border rounded text-white border-teal-light hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>
		<!-- submenu -->
		<div class="submenu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:justify-between" :class="isNavOpen ? 'active': 'inactive'">
			<div class="text-sm">
				<router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4" to="/">Home</router-link>
				<router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4" to="/about">About</router-link>
				<router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4" to="/contact">Contact</router-link>
			</div>
			<div class="lg:flex lg:justify-center lg:items-center">
				<!-- signup should take user to signup component -->
				<!-- TODO:
						When user is active - [show logout button, hide signup button]
						When user is inactive - [show login button, show signup button]
				-->
				<router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-4" to="/signup">signup</router-link>
				<!-- login should open modal -->
				<button @click="showModal = !showModal" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-800 hover:bg-white mt-4 lg:mt-0">login</button>
				<div class="lg:ml-4 switch text-white block mt-4 lg:mt-0" @click="updateDarkmode">Dark mode:
					<span class="inner-switch">{{ isDarkMode ? 'ON' : 'OFF' }}</span>
				</div>
			</div>
		</div><!-- end submenu -->
	</nav><!-- end nav -->
</template>


<style lang="scss" scoped>
@media (max-width: 1023px) {
	nav {
		.submenu {
			height: 100%;
			overflow: hidden;
			&.inactive {
				opacity: 0;
				height: 0;
				transform: scale(0) translateY(50px);
				animation: closeMobileSubmenu .9s ease-in;
			}
			&.active {
				animation: openMobileSubmenu 1.2s ease;
				height: 40vh;
				transform: scale(1) translateY(50px);
			}
		}
	}
}
@keyframes openMobileSubmenu {
	0% {
		opacity: 0;
		height: 0;
		transform: scale(0) translateY(50px);
	}
	50% {
		opacity: .7;
		height: 60vh;
		transform: scale(1.2) translateY(100px);
	}
	100% {
		opacity: 1;
		height: 40vh;
		transform: scale(1) translateY(50px);
	}
}
@keyframes closeMobileSubmenu {
	0% {
		opacity: 1;
		height: 40vh;
		transform: scale(1) translateY(50px);
	}
	50% {
		opacity: .7;
		height: 60vh;
		transform: scale(1.2) translateY(100px);
	}
	100% {
		opacity: 0;
		height: 0;
		transform: scale(0) translateY(50px);
	}
}
</style>
