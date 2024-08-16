<script setup>
import { ref } from 'vue';
import ContactForm from '@/components/ContactForm.vue';

const name = ref('');
const email = ref('');
const organisation = ref('');
const message = ref('');



// Submit function
const submitForm = () => {
	// Get the form data
	const formData = {
		name: name.value,
		email: email.value,
		organisation: organisation.value,
		message: message.value
	};
	// Log the form data
	console.log(formData);
};
</script>

<template>
		<h1>Contact</h1>
	<ContactForm></ContactForm>
</template>

<style scoped>
h1 {
	font-size: 4rem;
	margin-bottom: 20px;
}
</style>