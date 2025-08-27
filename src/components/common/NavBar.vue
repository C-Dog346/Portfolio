<script setup lang="ts">
import { ref, toRef } from "vue";

const props = defineProps<{
  activeSection?: string;
}>();

const isMenuOpen = ref(false);
const activeSection = toRef(props, "activeSection");

const toggleMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const updateActiveSection = (section: string) => {
  isMenuOpen.value = false;
  activeSection.value = section;
};
</script>

<template>
  <nav class="navbar" role="navigation">
    <div class="desktop">
      <a
        href="#home"
        :class="['nav-link', { active: activeSection === 'home' }]"
        :aria-current="activeSection === 'home' ? 'page' : undefined"
      >
        Home
      </a>
      <a
        href="#about"
        :class="['nav-link', { active: activeSection === 'about' }]"
        :aria-current="activeSection === 'about' ? 'page' : undefined"
      >
        About
      </a>
      <a
        href="#projects"
        :class="['nav-link', { active: activeSection === 'projects' }]"
        :aria-current="activeSection === 'projects' ? 'page' : undefined"
      >
        Projects
      </a>
      <a
        href="#contact"
        :class="['nav-link', { active: activeSection === 'contact' }]"
        :aria-current="activeSection === 'contact' ? 'page' : undefined"
      >
        Contact
      </a>
    </div>
    <div class="mobile">
      <button
        class="hamburger"
        :class="{ open: isMenuOpen }"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen"
        @click="toggleMenuOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <div class="menu" v-if="isMenuOpen">
        <a
          href="#home"
          :class="['nav-link', { active: activeSection === 'home' }]"
          :aria-current="activeSection === 'home' ? 'page' : undefined"
          @click="updateActiveSection('home')"
        >
          Home
        </a>
        <a
          href="#about"
          :class="['nav-link', { active: activeSection === 'about' }]"
          :aria-current="activeSection === 'about' ? 'page' : undefined"
          @click="updateActiveSection('about')"
        >
          About
        </a>
        <a
          href="#projects"
          :class="['nav-link', { active: activeSection === 'projects' }]"
          :aria-current="activeSection === 'projects' ? 'page' : undefined"
          @click="updateActiveSection('projects')"
        >
          Projects
        </a>
        <a
          href="#contact"
          :class="['nav-link', { active: activeSection === 'contact' }]"
          :aria-current="activeSection === 'contact' ? 'page' : undefined"
          @click="updateActiveSection('contact')"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.2rem 2rem;
  background: rgba(24, 26, 27, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(169, 169, 169, 0.1);
  transition:
    all 0.3s ease,
    padding 0.2s;
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
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: var(--secondary-text-color);
  border-radius: 1px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 40px;
}
.bar {
  width: 100%;
  height: 4px;
  background-color: grey;
  border-radius: 2px;
  transition: all 0.3s ease;
  display: block;
  margin: 2px;
}

.hamburger.open .bar:nth-child(1) {
  transform: rotate(45deg) translateY(10px);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:nth-child(3) {
  transform: rotate(-45deg) translateY(-10px);
}

.mobile {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    gap: 1rem;
    padding: 0.8rem 1rem;
    height: 64px;
    justify-content: start;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }
}
</style>
