<script setup lang="ts">
import { ref, toRef } from "vue";

const props = defineProps<{
  activeSection?: string;
}>();

const isMenuOpen = ref(false);
const activeSection = toRef(props, "activeSection");

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const toggleMenuOpen = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);
const isActive = (label: string) => activeSection.value === label;
</script>

<template>
  <nav class="navbar" role="navigation">
    <!-- Desktop Navigation -->
    <div class="desktop">
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        :class="['nav-link', { active: isActive(item.label) }]"
        :aria-current="isActive(item.label) ? 'page' : undefined"
      >
        {{ item.label }}
      </a>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile">
      <div class="current-section">{{ activeSection }}</div>
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

      <Transition name="menu">
        <div v-if="isMenuOpen" class="mobile-menu">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            :class="['nav-link', { active: isActive(item.label) }]"
            :aria-current="isActive(item.label) ? 'page' : undefined"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>
      </Transition>
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
  transition: all 0.3s ease;
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
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.bar {
  width: 100%;
  height: 3px;
  background: var(--primary-text-color);
  border-radius: 2px;
  transition: all 0.3s ease;
  margin: 3px 0;
}

.hamburger.open .bar:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(24, 26, 27, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(169, 169, 169, 0.1);
  min-width: 150px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

/* Vue Transition Classes */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu .nav-link {
  display: block;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(169, 169, 169, 0.1);
  width: 100%;
  box-sizing: border-box;
}

.mobile-menu .nav-link:last-child {
  border-bottom: none;
}

.mobile-menu .nav-link.active {
  color: var(--secondary-text-color);
  background: rgba(139, 31, 31, 0.15);
}

.current-section {
  color: var(--secondary-text-color);
  background: rgba(139, 31, 31, 0.15);
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  min-width: 80px;
  text-align: center;
  text-transform: capitalize;
}

.mobile {
  display: none;
  position: relative;
}

@media (max-width: 768px) {
  .navbar {
    justify-content: flex-end;
    padding: 1rem 1.5rem;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>
