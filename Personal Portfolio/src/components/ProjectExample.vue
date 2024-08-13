<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	github: {
		type: String,
		required: true
	}

});

</script>

<template>
	<div class="project">
		<h1> {{ props.name }} </h1>
		<div class="image">
			<img :src="props.image" alt="Project Image" />
		</div>
		<p class="description">{{ props.description }}</p>
		<div class="links">
			<a :href="props.github" target="_blank"><img class="icon" src="../assets/GitHubLogo.png"
					alt="GitHub project link" /></a>
		</div>

	</div>
</template>

<style scoped>
.project {
	display: flex;
	flex-direction: column;
	border: 1px solid --border-color;
}

.image {
	border: 1px solid var(--border-color);
}

p.description {
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	margin-bottom: 4rem;
}

.icon {
	width: 50px;
	height: 50px;
}

.links {
	display: flex;
	justify-content: center;
}

a {
	max-width: fit-content;
}
</style>