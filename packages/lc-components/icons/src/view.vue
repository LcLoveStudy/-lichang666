<template>
  <svg
    t="1724666590026"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    class="lc-icon"
    :width="size"
    :height="size"
    preserveAspectRatio="xMidYMid meet"
  >
    <ellipse cx="8" cy="8" rx="7" ry="5" :stroke="color" stroke-width="1" fill="none" />
    <circle cx="8" cy="8" r="2.5" :stroke="color" stroke-width="1" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  import { iconProps } from './icon'
  defineProps(iconProps)
</script>
