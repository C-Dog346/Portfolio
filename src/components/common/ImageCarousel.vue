<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ images: unknown[] }>()
const doubledImages = computed(() => [...(props.images ?? []), ...(props.images ?? [])])
</script>

<template>
  <div class="carousel">
    <div class="carousel-track">
      <img v-for="(image, i) in doubledImages" :key="i" :src="String(image)" alt="" />
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
}

.carousel-track {
  display: flex;
  gap: 2rem;
  animation: scroll 40s linear infinite;
  width: max-content;
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
