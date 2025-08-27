<script setup lang="ts">
import { computed } from "vue";

type LinkItem = { image: string; name?: string; url?: string };

const props = defineProps<{ items: LinkItem[] }>();
const doubledItems = computed<LinkItem[]>(() => [
  ...(props.items ?? []),
  ...(props.items ?? [])
]);
</script>

<template>
  <div class="carousel">
    <div class="carousel-track">
      <div v-for="(item, i) in doubledItems" :key="i" class="carousel-item">
        <img :src="String(item.image)" :alt="String(item.name)" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    var(--background-color) 10%,
    var(--background-color) 90%,
    transparent 100%
  );
  margin-top: 2rem;
}
.carousel-track {
  display: flex;
  gap: 2rem;
  animation: scroll 30s linear infinite;
  width: max-content;
}
.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel img {
  width: min(100px, 20vw);
  height: auto;
  flex-shrink: 0;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
}

@keyframes scroll {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
