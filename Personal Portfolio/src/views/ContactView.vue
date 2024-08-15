<script setup>
import { ref } from 'vue';

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

	// send email to target email address
	
};
</script>

<template>
	<div>
		<h1>Contact</h1>
		<form @submit.prevent="submitForm">
			<div>
				<div>
					<input type="text" id="name" v-model="name" placeholder="Name *" required>
				</div>
				<div>
					<input type="email" id="email" v-model="email" placeholder="Email *" required>
				</div>
				<div>
					<textarea id="message" v-model="Organisation" placeholder="Organisation"></textarea>
				</div>
				<div>
					<textarea id="message" v-model="message" placeholder="Message *" required></textarea>
				</div>
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>
</template>

<style scoped>
h1 {
	font-size: 4rem;
	margin-bottom: 20px;
}

form {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
}

label {
	font-weight: bold;
	margin-bottom: 5px;
}

input,
textarea {
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	min-width: 40%;
}

button {
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	max-width: 400px;
}

button:hover {
	background-color: #0056b3;
}

button:disabled {
	background-color: #ccc;
	cursor: not-allowed;
}
</style>