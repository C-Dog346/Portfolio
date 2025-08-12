<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="links">Home</RouterLink>
      <RouterLink to="/about" class="links">About</RouterLink>
      <RouterLink to="/projects" class="links">Projects</RouterLink>
      <RouterLink to="/contact" class="links">Contact</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #791f1f00;
  border: 1px solid var(--neon-green);
  color: var(--text-color);
}

.links {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
}
</style>
