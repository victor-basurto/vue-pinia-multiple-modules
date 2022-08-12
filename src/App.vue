<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRootStore } from './store/useRootStore'
import { useIsMobile } from './composables/global'
import EntryPoint from './components/EntryPoint.vue'
import TopNavbar from './components/base/nav/TopNavbar.vue'

const rootStore = useRootStore()
const { darkMode } = storeToRefs(rootStore)
const { setIsMobile } = rootStore
const { check } = useIsMobile()


const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
}
console.log(getMediaPreference())


onMounted(() => {
	setIsMobile(check.value)
})

</script>

<template>
	<main :class="{'dark-theme': darkMode}">
		<TopNavbar />
		<h1 class="box-border p-4">
			Strains Reviewer
		</h1>
		<div class="container">
			<img alt="Vue logo" src="./assets/logo.png" />
			<EntryPoint msg="Hello Vue 3 + TypeScript + Vite" />

		</div>
		<router-view></router-view>
	</main>
</template>

<style lang="scss">
:root {
	--background-color-primary: #ebebeb;
	--background-color-secondary: #fafafa;
	--accent-color: #cacaca;
	--text-primary-color: #222;
	--element-size: 4rem;
}
.dark-theme {
	--background-color-primary: #1e1e1e;
	--background-color-secondary: #2d2d30;
	--accent-color: #3f3f3f;
	--text-primary-color: #ddd;
}
main {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	min-height: 100vh;
	background-color: var(--background-color-primary);

	:where(span, div, li, p, strong, h1, h2, h3, h4, h5, h6):not(nav *) { color: var(--text-primary-color); }

}
@media (max-width: 767px) {
	.container img { margin: auto; }
}
</style>
