<template>
  <div class="playground">
    <lc-input v-model="inputValue" placeholder="请输入名称" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LcInput } from '@lichang666/design-vue'
const inputValue = ref('33333')
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
