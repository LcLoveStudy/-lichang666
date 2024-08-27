<template>
  <div class="lc-input" @click="inputFocus">
    <component
      :is="compIs"
      ref="inputRef"
      :style="{
        resize: resizeStyle
      }"
      class="lc-input__inner"
      :value="inputValue"
      :placeholder
      :type
      :disabled
      :readonly
      :autofocus
      :autocomplete
      :maxlength
      :rows="props.type === 'textarea' ? rows : undefined"
      :cols="props.type === 'textarea' ? cols : undefined"
      @input="inputEventHandler"
      @blur="blurEventHandler"
      @focus="focusEventHandler"
    />
    <div class="lc-input__suffix">
      <div class="lc-input__count" v-if="showCountComputed">
        {{ countStringComputed }}
      </div>
      <CloseFullIcon @click="clearInputValue" v-if="clearIconShow" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { CloseFullIcon } from '@lichang666/design-vue'
  import { computed, ref } from 'vue'
  import { unicodeSize } from '@lichang666/utils'
  import { inputProps } from './input'
  const props = defineProps(inputProps)
  const emits = defineEmits(['input', 'blur', 'focus', 'clear'])
  const inputValue = defineModel({
    type: String,
    required: true
  })
  const inputRef = ref<HTMLInputElement>()
  /** blur input */
  const inputBlur = () => {
    if (!inputRef.value) return
    inputRef.value.blur()
  }
  /** focus input*/
  const inputFocus = () => {
    if (!inputRef.value) return
    inputRef.value.focus()
  }

  /** computed is input or textarea element */
  const compIs = computed(() => (props.type !== 'textarea' ? 'input' : 'textarea'))

  /** computed show of clearIcon */
  const clearIconShow = computed(() => {
    return props.clearable && inputValue.value
  })

  /** computed count show */
  const showCountComputed = computed(() => {
    return props.showCount && props.maxlength && props.type !== 'password' && !props.clearable
  })
  /** computed count string */
  const countStringComputed = computed(() => {
    return `${unicodeSize(inputValue.value)} / ${props.maxlength}`
  })

  /** textarea resize */
  const resizeStyle = computed(() => (props.type === 'textarea' ? props.resize : 'none'))

  /** input event */
  const inputEventHandler = () => {
    if (!inputRef.value) return
    inputValue.value = inputRef.value.value
    emits('input', inputValue.value)
  }

  /** clear input value */
  const clearInputValue = () => {
    if (!inputRef.value || props.disabled) return
    inputRef.value.value = ''
    inputEventHandler()
    emits('clear')
  }

  /** blur event */
  const blurEventHandler = (e: FocusEvent) => emits('blur', e)

  /** focus event */
  const focusEventHandler = (e: FocusEvent) => emits('focus', e)

  defineExpose({
    blur: inputBlur,
    focus: inputFocus
  })
</script>
