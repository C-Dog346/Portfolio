<script setup lang="ts">
interface Link {
  name: string
  url: string
  image: string
}
const { links } = defineProps<{ links: Link[] }>()
</script>

<template>
  <div class="my-links-wrapper">
    <h3>My Links</h3>
    <div class="links">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="link.image" :alt="link.name + ' icon'" class="link-icon" />
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<style>
.my-links-wrapper,
.links {
  display: flex;
  justify-content: center;
  width: 100%;
}
.my-links-wrapper {
  flex-direction: column;
  align-items: center;
}
.links {
  gap: 2rem;
}
.link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-text-color);
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s;
}
.link:hover {
  color: var(--secondary-text-color);
}
.link-icon {
  width: 24px;
  height: 24px;
}
</style>
