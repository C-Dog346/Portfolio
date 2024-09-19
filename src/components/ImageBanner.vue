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
    translateX.value -= speed; // Move left
    // When translateX reaches the point where the second set starts, reset to the original images
    if (Math.abs(translateX.value) >= (props.images.length + 1) * speed) {
      isTransitioning.value = false; // Disable transition for seamless reset
      translateX.value = 0; // Reset to the start of the original images
      setTimeout(() => {
        isTransitioning.value = true; // Re-enable transition
      }, 50);
    }
  }, 3000); // Adjust interval for the desired scroll speed
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
        <!-- First set of images -->
        <div v-for="(image, index) in props.images" :key="'set1-' + index" class="image-banner-item" :style="scrollStyle">
          <img :src="image.image" alt="Banner Image" />
        </div>
        <!-- Second set of images for seamless loop -->
        <div v-for="(image, index) in props.images" :key="'set2-' + index" class="image-banner-item" :style="scrollStyle">
          <img :src="image.image" alt="Banner Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-banner {
  overflow: hidden; /* Ensure only one set of images is visible at a time */
}
.image-banner-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.image-banner-content {
  display: flex;
  width: max-content; /* Ensures the container grows to fit all items */
}
.image-banner-item img {
  width: 90px; /* Each image takes the full width of the banner */
}
</style>