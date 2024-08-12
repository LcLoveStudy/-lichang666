<template>
  <div class="playground">
    <lc-text type="primary" disabled>111</lc-text>
  </div>
</template>

<script setup lang="ts">
import { LcText } from '@lichang666/lc-design-vue'
</script>

<style scoped>
.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>
