<script setup lang="ts">
import ProjectExample from '@/components/projects/ProjectExample.vue'
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
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  list-style: none;
}
</style>
