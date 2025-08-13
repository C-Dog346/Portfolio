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
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--secondary-text-color);
  transition: all 0.5s;
  z-index: -1;
}
.common-button::before {
  left: -95%;
}
.common-button:hover::before {
  left: -50%;
}
.common-button::after {
  right: -95%;
}
.common-button:hover::after {
  right: -50%;
}
.common-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
