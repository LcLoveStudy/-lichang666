<template>
  <div class="lc-input">
    <input
      ref="inputRef"
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
  import { ref } from 'vue'
  import { inputProps } from './input'
  defineProps(inputProps)
  const emits = defineEmits(['input', 'blur', 'focus'])
  const inputValue = defineModel({
    type: String,
    required: true
  })
  const inputRef = ref<HTMLInputElement>()
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

  defineExpose({
    blur: () => {
      if (!inputRef.value) return
      inputRef.value.blur()
    },
    focus: () => {
      if (!inputRef.value) return
      inputRef.value.focus()
    }
  })
</script>
