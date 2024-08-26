<template>
  <div class="playground">
    <lc-input ref="inputRef" v-model="inputValue" placeholder="请输入名称" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { LcInput, type LcInputInstance } from '@lichang666/design-vue'
const inputValue = ref('')
const inputRef = ref<LcInputInstance>()
onMounted(() => {
  console.log(inputRef.value?.placeholder)
})
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
