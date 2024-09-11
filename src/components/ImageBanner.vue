<script setup>
import { defineProps, onMounted, onBeforeUnmount, ref, computed } from 'vue';

const props = defineProps({
	images: {
		type: Array,
		required: true
	},
});

const translateX = ref(0);
const isTransitioning = ref(true);
let intervalId = 0;
const speed = 100;

const startAutoScroll = () => {
	intervalId = setInterval(() => {
		translateX.value -= speed;
		if (Math.abs(translateX.value) >= props.images.length * speed) {
			isTransitioning.value = false;
			translateX.value = 0;
			setTimeout(() => {
				isTransitioning.value = true;
			}, 50);
		}
	}, 3000);
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
	<div class="image-banner">
		<div class="image-banner-container">
			<div class="image-banner-content" :style="scrollStyle">
				<div v-for="(image, index) in props.images" :key="'set1-' + index" class="image-banner-item">
					<img :src="image.url" alt="Banner Image" />
				</div>
				<div v-for="(image, index) in props.images" :key="'set2-' + index" class="image-banner-item">
					<img :src="image" alt="Banner Image" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.image-banner {
	width: 100%;
	overflow: hidden;
}

.image-banner-container {
	display: flex;
	overflow: hidden;
	width: 100%;
}

.image-banner-content {
	display: flex;
	width: max-content;
}

.image-banner-item {
	flex: 0 0 auto;
	margin-right: 10px;
}

.image-banner-item img {
	width: 100%;
	height: auto;
}
</style>