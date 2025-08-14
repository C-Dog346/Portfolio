<template>
  <button
    :type="props.type || 'button'"
    :class="['common-button', props.customClass]"
    :disabled="props.disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

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
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.common-button::before,
.common-button::after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 0;
  background: var(--secondary-text-color);
  transition: height 0.5s;
  z-index: -1;
  pointer-events: none;
}
.common-button::before {
  top: 0;
}
.common-button::after {
  bottom: 0;
}
.common-button:hover::before,
.common-button:focus-visible::before {
  height: 50%;
}
.common-button:hover::after,
.common-button:focus-visible::after {
  height: 50%;
}
.common-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
