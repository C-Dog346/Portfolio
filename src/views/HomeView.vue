<script setup lang="ts"></script>

<template>
  <div class="welcome-message">
    <h1>Hi, I'm <span class="highlight">Callum</span>!</h1>
    <h1>Welcome to my portfolio.</h1>
  </div>
  <div class="continue-button">
    <RouterLink to="/about" class="continue-text">Continue</RouterLink>
  </div>
</template>

<style scoped>
.welcome-message {
  margin: 2rem;
}

h1 {
  font-size: 4rem;
  font-weight: 100;
  color: var(--text-color);
}

.continue-button {
  background-color: var(--border-color);
  color: var(--text-color);
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  max-width: 100px;
  margin: 2rem;
  text-align: center;
}
.continue-button:hover {
  background-color: var(--secondary-color);
}
.continue-text {
  text-decoration: none;
  color: var(--text-color);
}
</style>
