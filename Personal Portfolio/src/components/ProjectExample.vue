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
		}
	
});

</script>

<template>
	<div class="project">
		<img :src="props.image" alt="Project Image" />
		<p>{{ props.description }}</p>
	</div>
</template>

<style scoped>
.project {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>