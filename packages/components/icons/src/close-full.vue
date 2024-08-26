<template>
  <svg
    class="lc-icon"
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="8" cy="8" r="8" :fill="color" />
    <path d="M5 5 L11 11" stroke="#fff" stroke-width="2" stroke-linecap="round" />
    <path d="M11 5 L5 11" stroke="#fff" stroke-width="2" stroke-linecap="round" />
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#ccc'
    }
  })
</script>
