<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";
import NavBar from "@/components/common/NavBar.vue";

const activeSection = ref("Home");

const updateActiveSection = () => {
  const sections = ["Home", "About", "Projects", "Contact"];
  const scrollPosition = window.scrollY + 100;

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {  
      const sectionTop = element.offsetTop;
      const sectionBottom = sectionTop + element.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

const handleScroll = () => {
  updateActiveSection();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <main class="main-content">
    <section id="home" class="section">
      <HomeView />
    </section>

    <div class="nav-wrapper">
      <NavBar :active-section="activeSection" />
    </div>

    <section id="about" class="section">
      <AboutView />
    </section>

    <section id="projects" class="section">
      <ProjectsView />
    </section>

    <section id="contact" class="section">
      <ContactView />
    </section>
  </main>
</template>

<style scoped>
.section {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 80px;
}

.nav-wrapper {
  position: sticky;
  top: 0;
  width: 100vw;
  max-width: none;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-sizing: border-box;
  z-index: 100;
}
.main-content {
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 768px) {
  .section {
    padding: 1rem;
  }
}
</style>
