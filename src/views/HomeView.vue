<script setup lang="ts">
import CommonButton from '@/components/common/CommonButton.vue'
</script>

<template>
  <div class="welcome-message">
    <h1>Hi, I'm <span class="highlight">Callum!</span></h1>
    <h1>Welcome to my portfolio.</h1>
  </div>
  <div class="btn continue-button">
    <CommonButton />
  </div>
</template>

<style scoped>
.welcome-message {
  margin: 2rem;
}

h1 {
  font-size: 4rem;
  font-weight: 100;
  color: var(--primary-text-color);
}
</style>
