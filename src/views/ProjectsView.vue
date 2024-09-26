<script setup>
import ProjectExample from '@/components/ProjectExample.vue';
import projects from "../assets/data/projects/projects.json";
console.log(projects);	
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
h1 {
	text-align: center;
}
ul {
	list-style: none;
}
</style>