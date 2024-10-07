<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isHovered = ref(false);
const hoverBox = ref(null);
const nav = ref(null);

const showBox = (e) => {
  isHovered.value = true;

  const dropdown = e.target.querySelector('.dropdown');
  dropdown.style.visibility = 'visible';

};

const hideBox = (e) => {
  isHovered.value = false;
  const dropdown = e.target.querySelector('.dropdown');
  dropdown.style.visibility = 'hidden';
};

</script>


<template>
  <nav ref="nav">
    <div ref="hoverBox" class="hoverBox" v-show="isHovered">
      <span class="arrow"></span>
    </div>
    <ul>
      <li @mouseenter="showBox" @mouseleave="hideBox">
        <RouterLink to="/" class="links">Home</RouterLink>
        <div class="dropdown">
          TESTING TEXT
        </div>
      </li>
      <li @mouseenter="showBox" @mouseleave="hideBox">
        <RouterLink to="/about" class="links">About</RouterLink>
        <div class="dropdown">
          TESTING TEXT
        </div>
      </li>
      <li @mouseenter="showBox" @mouseleave="hideBox">
        <RouterLink to="/projects" class="links">Projects</RouterLink>
        <div class="dropdown">
          TESTING TEXT
        </div>
      </li>
      <li @mouseenter="showBox" @mouseleave="hideBox">
        <RouterLink to="/contact" class="links">Contact</RouterLink>
        <div class="dropdown">
          TESTING TEXT
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #791f1f00;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

nav li {
  flex: 1;
  text-align: center;
  position: relative;
}

.links {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
}

.hoverBox {
  width: 100px;
  height: 100px;
  position: absolute;
  background: #a73c2c;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
}

.arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  background: white;
  transform: translateY(-50%) rotate(45deg);
}

.dropdown {
  opacity: 0;
  position: absolute;
  overflow: hidden;
  padding: 20px;
  top: -20px;
  border-radius: 2px;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  visibility: hidden;
}
</style>