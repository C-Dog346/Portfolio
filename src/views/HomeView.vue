<script setup lang="ts">
import CommonButton from '@/components/common/CommonButton.vue'
</script>

<template>
  <div class="home-container">
    <div>
      <h1>Hi, I'm <span class="highlight">Callum!</span></h1>
      <h1>Welcome to my portfolio.</h1>
    </div>
    <div class="home-button">
      <CommonButton>Continue</CommonButton>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  margin: 2rem;
}

.home-button {
  margin-top: 2rem;
}

h1 {
  font-size: 4rem;
  font-weight: 100;
  color: var(--primary-text-color);
}
</style>
