<template>
  <div class="playground">
    <lc-input v-model="searchvalue">
      <template #suffixIcon>
        <SearchIcon />
      </template>
    </lc-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchIcon, LcInput } from '@lichang666/design-vue'
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
