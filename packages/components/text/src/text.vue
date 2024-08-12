<template>
  <span
    class="lc-text"
    :class="[
      color ? 'lc-text-custom' : `lc-text-${type}`,
      disabled ? `lc-text-${type}-disabled` : ''
    ]"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
  import { LoadingIcon } from '../../icons'
  import { textProps } from './text'
  const props = defineProps(textProps)
</script>
