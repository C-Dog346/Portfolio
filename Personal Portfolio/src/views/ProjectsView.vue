<script setup>
import ProjectExample from '@/components/ProjectExample.vue';

const projects = [
	{
		id: 1,
		name: 'Islands Challenge',
		image: 'src/assets/IslandsProject.png',
		description: 'This is a project that I made for the islands challenge.',
		github: 'https://github.com/C-Dog346/Islands-Challenge'
	},
	{
		id: 2,
		name: 'Project 2',
		image: 'https://via.placeholder.com/150',
		description: 'This is project 2',
		github: 'https://github.com/C-Dog346/Islands-Challenge'
	},
	{
		id: 3,
		name: 'Project 3',
		image: 'https://via.placeholder.com/150',
		description: 'This is project 3',
		github: 'https://github.com/C-Dog346/Islands-Challenge'
	}
];

</script>

<template>
	<div class="projects-view">
		<h1>Projects</h1>
		<ul>
			<li v-for="project in projects" :key="project.id">
				<ProjectExample :name="project.name" :image="project.image" :description="project.description"
					:github="project.github"></ProjectExample>
			</li>
		</ul>
	</div>
</template>

<style scoped>
ul {
	list-style: none;
}
</style>