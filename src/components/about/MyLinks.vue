<script setup>
defineProps({
  links: {
    type: Array,
    required: true
  }
})
</script>

<template>
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
</template>

<style>
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
  color: var(--primary-color);
}
.link-icon {
  width: 24px;
  height: 24px;
}
</style>
