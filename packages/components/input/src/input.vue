<template>
  <div class="lc-input">
    <input
      class="lc-input__inner"
      v-model="inputValue"
      :placeholder
      @input="inputEventHandler"
      @blur="blurEventHandler"
      @focus="focusEventHandler"
    />
  </div>
</template>

<script setup lang="ts">
  import { inputProps } from './input'
  defineProps(inputProps)
  const emits = defineEmits(['input', 'blur', 'focus'])
  const inputValue = defineModel({
    type: String,
    required: true
  })

  /** input event */
  const inputEventHandler = () => {
    emits('input', inputValue.value)
  }

  /** blur event */
  const blurEventHandler = (e: FocusEvent) => {
    emits('blur', e)
  }

  /** focus event */
  const focusEventHandler = (e: FocusEvent) => {
    emits('focus', e)
  }
</script>
