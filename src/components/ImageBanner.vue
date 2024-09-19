<script setup>
import { defineProps, onMounted, onBeforeUnmount, ref, computed } from 'vue';

const props = defineProps({
	title: {
		type: String,
		required: false,
	},
	images: {
		type: Array,
		required: true
	},
});

const translateX = ref(0);
const isTransitioning = ref(true);
let intervalId = 0;
const speed = 90;

const startAutoScroll = () => {
  intervalId = setInterval(() => {
    translateX.value -= speed;
    if (Math.abs(translateX.value) >= (props.images.length + 1) * speed) {
      isTransitioning.value = false;
      translateX.value = 0
      setTimeout(() => {
        isTransitioning.value = true;
      }, 50);
    }
  }, 3000)
};

const scrollStyle = computed(() => {
  return {
    transform: `translateX(${translateX.value}px)`,
    transition: isTransitioning.value ? 'transform 0.5s ease' : 'none',
  };
});

const stopAutoScroll = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startAutoScroll();
});

onBeforeUnmount(() => {
  stopAutoScroll();
});
</script>

<template>
  <div v-if="props.title" class="image-banner-title">{{ props.title }}</div>
  <div class="image-banner">
    <div class="image-banner-container">
      <div class="image-banner-content">
        <div v-for="(image, index) in props.images" :key="'set1-' + index" class="image-banner-item" :style="scrollStyle">
          <img :src="image.image" alt="Banner Image" />
        </div>
        <div v-for="(image, index) in props.images" :key="'set2-' + index" class="image-banner-item" :style="scrollStyle">
          <img :src="image.image" alt="Banner Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-banner-title {
  font-size: 2rem;
  color: var(--text-color);
  margin: 2rem 0;
}
.image-banner {
  overflow: hidden;
}
.image-banner-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.image-banner-content {
  display: flex;
  width: max-content;
}
.image-banner-item img {
  width: 90px;
}
</style>