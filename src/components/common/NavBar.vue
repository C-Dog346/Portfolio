<script setup lang="ts">
import { toRef } from 'vue'

const props = defineProps<{
  activeSection?: string
}>()

const activeSection = toRef(props, 'activeSection')
</script>

<template>
  <nav class="navbar" role="navigation">
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
  background: rgba(24, 26, 27, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(169, 169, 169, 0.1);
  transition: all 0.3s ease, padding 0.2s;
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

@media (max-width: 768px) {
  .navbar {
    gap: 1rem;
    padding: 0.8rem 1rem;
    height: 64px;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
