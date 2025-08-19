<template>
  <button
    :type="props.type || 'button'"
    :class="['common-button', props.customClass]"
    :disabled="props.disabled"
    @click="onClick"
  >
    <span class="fills-x" aria-hidden="true"></span>
    <span class="label"><slot /></span>
  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  customClass?: string
  disabled?: boolean
}>()

const emit = defineEmits(['click'])

function onClick(event: Event) {
  emit('click', event)
}
</script>

<style scoped>
.common-button {
  padding: 0.5em 1.5em;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  border: none;
}
.label {
  position: relative;
  z-index: 2;
}

.common-button::before,
.common-button::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--secondary-text-color);
  transform: scaleY(0);
  transition: transform 0.4s ease;
  pointer-events: none;
  z-index: 1;
}
.common-button::before {
  top: 0;
  transform-origin: top;
}
.common-button::after {
  bottom: 0;
  transform-origin: bottom;
}

.fills-x {
  position: absolute;
  inset: 0;
}
.fills-x::before,
.fills-x::after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: var(--secondary-text-color);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}
.fills-x::before {
  left: -0.8px;
  transform-origin: left;
}
.fills-x::after {
  right: -0.8px;
  transform-origin: right;
}

.common-button:hover::before,
.common-button:hover::after {
  transform: scaleY(1);
}
.common-button:hover .fills-x::before,
.common-button:hover .fills-x::after {
  transform: scaleX(1);
}
</style>
