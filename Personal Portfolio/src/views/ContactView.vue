<template>
	<div>
		<h1>Contact</h1>
		<form @submit="submitForm">
			<div>
				<label for="name">Name:</label>
				<input type="text" id="name" vo-model="name" required>
			</div>
			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" v-model="email" required>
			</div>
			<div>
				<label for="message">Message:</label>
				<textarea id="message" v-model="message" required></textarea>
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>

<script>
</script>

<style scoped>
/* Add your custom styles here */
</style>