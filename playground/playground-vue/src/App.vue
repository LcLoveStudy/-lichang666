<template>
  <div class="playground">
    <lc-card class="my-card" shadow="hover">1</lc-card>
  </div>
</template>

<script setup lang="ts">
import { LcCard } from '@lichang666/lc-design-vue'
</script>

<style scoped>
.playground {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
}
.my-card {
  width: 20rem;
  height: 10rem;
}
</style>
