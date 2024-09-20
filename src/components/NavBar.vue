<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const isHovered = ref(false);

const showBox = () => {
  isHovered.value = true;
};

const hideBox = () => {
  isHovered.value = false;
};
</script>


<template>
  <nav>
    <div v-if="isHovered" class="dropdownBackground">
      <span class="arrow">!!!!</span>
    </div>
    <ul>
      <li>
        <RouterLink to="/" class="links" @mouseenter="showBox" @mouseleave="hideBox">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="links" @mouseenter="showBox" @mouseleave="hideBox">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="links" @mouseenter="showBox" @mouseleave="hideBox">Projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="links" @mouseenter="showBox" @mouseleave="hideBox">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #791f1f00;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

nav li {
  flex: 1;
  text-align: center;
}

.links {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
}
</style>