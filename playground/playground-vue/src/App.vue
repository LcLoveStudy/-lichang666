<template>
  <div class="playground">
    <lc-input v-model="searchvalue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LcButton, SearchIcon, LcInput } from '@lichang666/design-vue'
const searchvalue = ref('')
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
