<script setup lang="ts">
import CommonButton from "@/components/common/CommonButton.vue";

const scrollToAbout = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    const navbarHeight = 80;
    const targetPosition = aboutSection.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
};
</script>

<template>
  <div class="home-container">
    <div class="home-content">
      <h1>Hi, I'm <span class="highlight">Callum!</span></h1>
      <h1>Welcome to my portfolio.</h1>
    </div>
    <div class="home-button">
      <CommonButton @click="scrollToAbout">Continue</CommonButton>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
}

.home-content {
  margin-bottom: 3rem;
}

.home-button {
  margin-top: 2rem;
}

h1 {
  font-size: 4rem;
  font-weight: 100;
  color: var(--primary-text-color);
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .home-container {
    padding: 1rem;
  }
}
</style>
