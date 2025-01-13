<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isHovered = ref(false);
const hoverBox = ref(null);
const nav = ref(null);

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});

const showBox = (e) => {
  const dropdown = e.target.querySelector('.dropdown');
  dropdown.style.display = 'block';
  e.target.classList.add('trigger-hover');
  setTimeout(() => e.target.classList.contains('trigger-hover') && e.target.classList.add('hover-active'), 150);

  console.log(e.target);
  console.log(visualViewport);
  const navRect = nav.value.getBoundingClientRect();
  const listItemRect = e.target.getBoundingClientRect();


  const coords = {
    width: listItemRect.width,
    height: listItemRect.height,
    top: listItemRect.top,
    left: listItemRect.left - navRect.left,
  };

  hoverBox.value.style.width = `${coords.width}px`;
  hoverBox.value.style.height = `${coords.height}px`;
  hoverBox.value.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  dropdown.style.top = `${listItemRect.height}px`;
  isHovered.value = true;
};

const hideBox = (e) => {
  isHovered.value = false;
  e.target.classList.remove('trigger-hover', 'hover-active');
};
</script>

<template>
  <nav ref="nav">
    <div ref="hoverBox" class="hoverBox" :class="{ show: isHovered }">
      <span class="arrow"></span>
    </div>
    <ul>
      <li v-for="(link) in props.links" :key="link.id" @mouseenter="showBox" @mouseleave="hideBox">
        <RouterLink :to="link.link" class="links">{{ link.name }}</RouterLink>
        <div class="dropdown">
          <span v-if="typeof link.body === 'object'">
            <a v-for="(item, index) in link.body" :key="index" :href="item.link" class="body-list">{{ item.name }}</a>
          </span>
          <span v-else>{{ link.body }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>




<style scoped>
nav {
  position: relative;
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
  justify-content: space-between;
  width: 100%;
}

nav li {
  flex-grow: 1;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
}

.links {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding: 1rem;
}

.hoverBox {
  position: absolute;
  background: var(--secondary-color);
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  display: flex;
  justify-content: center;
}

span > a {
  display: block;
}

.hoverBox.show {
  opacity: 1;
  transform: scale(1);
}

.hoverBox .arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--secondary-color);
  transform: translateY(-50%) rotate(45deg);
}

.dropdown {
  opacity: 0;
  position: absolute;
  padding: 1rem;
  background: transparent;
  border-radius: 5px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.trigger-hover .dropdown {
  opacity: 1;
  transform: translateY(0);
}
</style>