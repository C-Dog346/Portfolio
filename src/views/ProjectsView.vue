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
.projects-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--primary-text-color);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.project-item {
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 768px) {
  .projects-view {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    gap: 2rem;
  }
}
</style>
