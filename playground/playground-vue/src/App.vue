<template>
  <div class="playground">
    <lc-button text type="primary" disabled>111</lc-button>
  </div>
</template>

<script setup lang="ts">
import { LcButton } from '@lichang666/design-vue'
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
