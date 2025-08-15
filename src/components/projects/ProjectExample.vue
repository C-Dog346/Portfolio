<script setup lang="ts">
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
})
</script>

<template>
  <div class="project-card">
    <h2 class="project-name">{{ props.name }}</h2>
    <div class="image">
      <img :src="props.image" alt="Project Image" />
    </div>
    <p class="description">{{ props.description }}</p>
    <div class="links">
      <a :href="props.github" target="_blank" title="GitHub Project Link"
        ><img class="icon" src="@/lib/data/GitHubLogo.png" alt="GitHub Project Link"
      /></a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: #23232b;
  border-radius: 12px;
  border: 1.5px solid lime;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition:
    box-shadow 0.2s,
    border-color 0.2s,
    transform 0.2s;
  position: relative;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-card:hover {
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.35);
  border-color: darkred;
  transform: translateY(-4px) scale(1.02);
}

.project-card-accent {
  border: 2px solid darkred;
}

.image img {
  border-radius: 8px;
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-name {
  border-bottom: 2px solid lime;
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: lime;
  text-shadow: 0 1px 8px #18181f;
}

.image {
  border: none;
  margin-bottom: 1rem;
  background: transparent;
}

img {
  max-width: 100%;
  height: auto;
}

p.description {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  color: #f0f0f0;
}

.icon {
  filter: drop-shadow(0 0 4px lime);
  transition: filter 0.2s;
  background: none;
  padding: 0;
  max-width: 32px;
  max-height: 32px;
  width: auto;
  height: auto;
  display: inline;
}
.icon:hover {
  filter: drop-shadow(0 0 8px darkred);
  background: none;
}

.links {
  display: flex;
  justify-content: center;
}

a {
  display: inline-flex;
  align-items: center;
  background: none;
  padding: 0;
  text-decoration: none;
  color: lime;
  transition: color 0.2s;
}
a:hover {
  color: darkred;
}
</style>
