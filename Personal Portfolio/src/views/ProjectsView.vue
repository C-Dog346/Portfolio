<script setup>
import ProjectExample from '@/components/ProjectExample.vue';

const projects = [
	{
		id: 1,
		name: 'Project 1',
		image: 'https://via.placeholder.com/150',
		description: 'This is project 1'
	},
	{
		id: 2,
		name: 'Project 2',
		image: 'https://via.placeholder.com/150',
		description: 'This is project 2'
	},
	{
		id: 3,
		name: 'Project 3',
		image: 'https://via.placeholder.com/150',
		description: 'This is project 3'
	}
];

</script>

<template>
	<div class="projects-view">
		<h1>Projects</h1>
		<ul>
			<li v-for="project in projects" :key="project.id">
				<ProjectExample 
					:name="project.name" 
					:image="project.image" 
					:description="project.description"></ProjectExample>
			</li>
		</ul>
	</div>
</template>

<style scoped>
ul {
	list-style: none;
}
</style>