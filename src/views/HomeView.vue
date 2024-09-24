<script setup lang="ts">
</script>

<template>
	<div class="welcome-message">
		<h1>Hi, I'm <span class="highlight">Callum</span>!</h1>
		<h1>Welcome to my portfolio.</h1>
	</div>
	<div class="continue-button">
		<RouterLink to="/about" class="continue-text">Continue</RouterLink>
	</div>
</template>

<style scoped>
.welcome-message {
	margin: 2rem;
}

h1 {
	font-size: 4rem;
	font-weight: 100;
	color: var(--text-color);
}

.continue-button {
	padding: 10px 20px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border: transparent;
    border-radius: 8px;
	max-width: 80px;
	margin: 2rem;
	text-align: center;
}

.continue-text {
	text-decoration: none;
	color: var(--text-color);
}

.continue-text::before {
	content: '';
	position: absolute;
	top: 0%;
	left: -95%;
	width: 100%;
	height: 100%;
	background-color: var(--secondary-color);
	transition: left 0.75s ease;
	z-index: -1;
}

.continue-text:hover::before {
    left: -50%;
}

.continue-text::after {
    content: '';
    position: absolute;
    top: 0%;
    right: -95%;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    transition: right 0.5s ease;
    z-index: -1;
}

.continue-text:hover::after {
    right: -50%;
}
</style>