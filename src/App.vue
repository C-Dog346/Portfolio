<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import NavBar from '@/components/common/NavBar.vue'

const isScrolled = ref(false)
const activeSection = ref('home')

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navbarHeight = 80
    const targetPosition = element.offsetTop - navbarHeight

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const sections = ['home', 'about', 'projects', 'contact']
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const sectionTop = element.offsetTop
      const sectionBottom = sectionTop + element.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  updateActiveSection()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main class="main-content">
    <section id="home" class="section">
      <HomeView />
    </section>

    <!-- Full-bleed sticky wrapper to keep NavBar between sections and span viewport -->
    <div class="nav-wrapper">
      <NavBar
        :is-scrolled="isScrolled"
        :active-section="activeSection"
        @navigate="scrollToSection"
      />
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
  justify-content: center;
  align-items: center;
}

.section:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

/* Full-bleed sticky wrapper for NavBar */
.nav-wrapper {
  position: sticky;
  top: 0;
  width: 100vw;
  max-width: none;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-sizing: border-box;
  z-index: 1000;
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
.links:hover {
  color: var(--secondary-text-color);
  transition: color 0.2s;
}
</style>
