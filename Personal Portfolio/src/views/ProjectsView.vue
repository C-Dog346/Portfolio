<template>
	<div class="projects-view">
		<h1>Projects</h1>
		<ul>
			<li v-for="project in projects" :key="project.id">
				{{ project.name }}
			</li>
		</ul>
	</div>
</template>

<script>

</script>

<style scoped>

</style>