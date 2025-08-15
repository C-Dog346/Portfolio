<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'

const isScrolled = ref(false)
const activeSection = ref('home')

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navbarHeight = 80 // navbar height
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
  <header>
    <nav :class="['navbar', { scrolled: isScrolled }]">
      <a
        href="#home"
        @click.prevent="scrollToSection('home')"
        :class="['nav-link', { active: activeSection === 'home' }]"
      >
        Home
      </a>
      <a
        href="#about"
        @click.prevent="scrollToSection('about')"
        :class="['nav-link', { active: activeSection === 'about' }]"
      >
        About
      </a>
      <a
        href="#projects"
        @click.prevent="scrollToSection('projects')"
        :class="['nav-link', { active: activeSection === 'projects' }]"
      >
        Projects
      </a>
      <a
        href="#contact"
        @click.prevent="scrollToSection('contact')"
        :class="['nav-link', { active: activeSection === 'contact' }]"
      >
        Contact
      </a>
    </nav>
  </header>

  <main class="main-content">
    <section id="home" class="section">
      <HomeView />
    </section>

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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background: rgba(24, 26, 27, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(169, 169, 169, 0.1);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(24, 26, 27, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav-link {
  color: var(--primary-text-color);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--secondary-text-color);
  background: rgba(139, 31, 31, 0.1);
}

.nav-link.active {
  color: var(--secondary-text-color);
  background: rgba(139, 31, 31, 0.15);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: var(--secondary-text-color);
  border-radius: 1px;
}

.main-content {
  margin-top: 80px;
}

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

/* Responsive design */
@media (max-width: 768px) {
  .navbar {
    gap: 1rem;
    padding: 0.8rem 1rem;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }

  .section {
    padding: 1rem;
  }

  .main-content {
    margin-top: 70px;
  }
}
.links:hover {
  color: var(--secondary-text-color);
  transition: color 0.2s;
}
</style>
