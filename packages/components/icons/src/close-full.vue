<template>
  <svg
    t="1724666590026"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    class="lc-icon"
    :width="size"
    :height="size"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M1024 512c0 282.7776-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0s512 229.2224 512 512z m-372.736-194.9184L512 456.3456l-139.264-139.264A39.424 39.424 0 0 0 317.0816 372.736L456.3456 512l-139.264 139.264a39.424 39.424 0 1 0 55.6544 55.6544l139.264-139.264 139.264 139.264a39.424 39.424 0 1 0 55.6544-55.6544L567.6544 512l139.264-139.264a39.424 39.424 0 0 0-55.6544-55.6544z"
      p-id="4266"
      :fill="color"
    ></path>
  </svg>
</template>

<script setup lang="ts">
  import { iconProps } from './icon'
  defineProps(iconProps)
</script>
