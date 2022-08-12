<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRootStore } from './store/useRootStore'
import { useIsMobile } from './composables/global'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import EntryPoint from './components/EntryPoint.vue'
import TopNavbar from './components/base/nav/TopNavbar.vue'

const rootStore = useRootStore()
const { isMobile } = storeToRefs(rootStore)
const { setIsMobile } = rootStore
const { check } = useIsMobile()

onMounted(() => {
	setIsMobile(check.value)
	console.log('is Mobile?>', isMobile.value)
})

</script>

<template>
	<main class="main">
		<TopNavbar />
		<nav class="box-border p-4">
			Homes Detector
		</nav>
		<div class="container">
			<img alt="Vue logo" src="./assets/logo.png" />
			<EntryPoint msg="Hello Vue 3 + TypeScript + Vite" />

		</div>
		<router-view></router-view>
	</main>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
@media (max-width: 767px) {
	.container img { margin: auto; }
}
</style>
