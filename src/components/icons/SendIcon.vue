<template>
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    :style="{ stroke: color }"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
    />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped>
svg {
  width: 1rem;
  height: 1rem;
  transform: rotate(45deg);
}
</style>
