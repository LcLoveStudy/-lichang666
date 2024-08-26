<template>
  <div class="lc-input">
    <component
      :is="compIs"
      ref="inputRef"
      :style="{
        resize: resizeStyle
      }"
      class="lc-input__inner"
      v-model="inputValue"
      :placeholder
      :type
      @input="inputEventHandler"
      @blur="blurEventHandler"
      @focus="focusEventHandler"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { inputProps } from './input'
  const props = defineProps(inputProps)
  const emits = defineEmits(['input', 'blur', 'focus'])
  const inputValue = defineModel({
    type: String,
    required: true
  })
  const inputRef = ref<HTMLInputElement>()

  /** computed is input or textarea element */
  const compIs = computed(() => (props.type !== 'textarea' ? 'input' : 'textarea'))

  /** textarea resize */
  const resizeStyle = computed(() => (props.type === 'textarea' ? props.resize : 'none'))

  /** input event */
  const inputEventHandler = () => emits('input', inputValue.value)

  /** blur event */
  const blurEventHandler = (e: FocusEvent) => emits('blur', e)

  /** focus event */
  const focusEventHandler = (e: FocusEvent) => emits('focus', e)

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
