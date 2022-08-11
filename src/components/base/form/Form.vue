<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'Form',
	setup () {

		const firstName = ref('John')
		const lastName = ref('Doe')
		const fullName = ref(`${firstName.value} ${lastName.value}`)
		const age = ref(20)
		const submit = () => {
			console.log(`${firstName.value} ${lastName.value} is ${age.value} years old`)
		}


		return {
			firstName,
			lastName,
			fullName,
			age,
			submit
		}
	}
})
</script>
<template>
	<div>
		<!-- create tailwindcss form using firstname, lastname, age -->
		<form>
			<div class="flex flex-col items-center my-4">
				<label for="firstname" class="text-gray-600 text-sm">First Name</label>
				<input v-model="firstName" id="firstname" class="border w-full p-2" type="text" placeholder="First Name">
			</div>
			<div class="flex flex-col items-center my-4">
				<label for="lastname" class="text-gray-600 text-sm">Last Name</label>
				<input v-model="lastName" id="lastname" class="border w-full p-2" type="text" placeholder="Last Name">
			</div>
			<div class="flex flex-col items-center my-4">
				<label for="age" class="text-gray-600 text-sm">Age</label>
				<input v-model="age" id="age" class="border w-full p-2" type="text" placeholder="Age">
			</div>
			<div class="flex justify-center my-4">
				<button @click.prevent="submit" class="bg-blue-500 px-4 py-2 text-white rounded">Submit</button>
			</div>
		</form>
	</div>
</template>
<style scoped>

</style>
