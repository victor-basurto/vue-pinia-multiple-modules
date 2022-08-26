<script setup lang="ts">
import { reactive } from 'vue'
import { type IUser } from '@/@types/interfaces/user-interface'

const userState = reactive<IUser>({
	firstName: 'John',
	lastName: 'Doe',
	age: 20
})

const submit = () => {
	console.log(`${userState.firstName} ${userState.lastName} is ${userState.age} years old`)
}

</script>
<template>
	<div>
		<form>
			<div class="flex flex-col my-4">
				<label for="firstname" class="text-sm">First Name</label>
				<input v-model="userState.firstName" id="firstname" class="border w-full p-2" type="text" placeholder="First Name">
			</div>
			<div class="flex flex-col my-4">
				<label for="lastname" class="text-sm">Last Name</label>
				<input v-model="userState.lastName" id="lastname" class="border w-full p-2" type="text" placeholder="Last Name">
			</div>
			<div class="flex flex-col my-4">
				<label for="age" class="text-sm">Age</label>
				<input v-model="userState.age" id="age" class="border w-full p-2" type="text" placeholder="Age">
			</div>
			<div class="flex justify-center my-4">
				<button @click.prevent="submit" class="px-4 py-2 bg-gradient-to-r text-white from-indigo-800 to-purple-800 shadow-lg rounded">Submit</button>
			</div>
		</form>
	</div>
</template>
<style scoped>
input { color: var(--input-primary-color); }
</style>
