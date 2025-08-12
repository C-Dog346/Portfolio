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
  },
  github: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="project">
    <h2 class="project-name">{{ props.name }}</h2>
    <div class="image">
      <img :src="props.image" alt="Project Image" />
    </div>
    <p class="description">{{ props.description }}</p>
    <div class="links">
      <a :href="props.github" target="_blank" title="GitHub project link"
        ><img class="icon" src="../assets/GitHubLogo.png" alt="GitHub project link"
      /></a>
    </div>
    <div style="border: 1px solid black; margin-top: 1rem; margin-bottom: 1rem"></div>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

/* .project-name {
} */

.image {
  border: 1px solid var(--border-color);
}

img {
  max-width: 100%;
  height: auto;
}

p.description {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

.icon {
  width: 50px;
  height: 50px;
}

.links {
  display: flex;
  justify-content: center;
}

a {
  max-width: fit-content;
}
</style>
