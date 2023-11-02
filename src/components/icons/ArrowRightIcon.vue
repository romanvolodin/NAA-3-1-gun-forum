<script setup>
const props = defineProps({
  fillColor: {
    type: String,
    default: '#ff00ff',
  },
  size: {
    type: Number,
    default: 24,
  },
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" :width="size" :height="size"
    viewBox="0 0 24 24" stroke-width="2" :stroke="fillColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 12l14 0"></path>
    <path d="M13 18l6 -6"></path>
    <path d="M13 6l6 6"></path>
  </svg>
</template>
