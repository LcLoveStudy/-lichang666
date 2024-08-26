<template>
  <div class="lc-input">
    <input class="lc-input__inner" v-model="inputValue" :placeholder />
  </div>
</template>

<script setup lang="ts">
  import { inputProps } from './input'
  defineProps(inputProps)
  const inputValue = defineModel({
    type: String,
    required: true
  })
</script>
