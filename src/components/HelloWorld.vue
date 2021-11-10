<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRootStore } from '@/store/useRootStore'

defineProps<{ msg: string }>();

const rootStore = useRootStore()
const { version, getCurrentVersionMsg } =  storeToRefs(rootStore)
const updateVersion = () => {
	rootStore.setVersion('1.0.9')
}



const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  {{ version }}
  {{ rootStore }}
	<p>Root Store Version: {{ getCurrentVersionMsg }}</p>
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

  <button type="button" @click="updateVersion">count is: {{ version }}</button>
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
</style>
