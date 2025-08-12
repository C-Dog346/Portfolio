<script setup>
import ProjectExample from '@/components/ProjectExample.vue'
import projects from '../../public/data/projects/projects.json'
</script>

<template>
  <div class="projects-view">
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id" class="project-item">
        <ProjectExample
          :name="project.name"
          :image="project.image"
          :description="project.description"
          :github="project.github"
        />
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

.projects-view {
  margin: 2rem;
}

.project-item {
  border: 1px solid var(--neon-green);
  margin: 1rem;
}
</style>
