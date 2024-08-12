<template>
  <button
    class="lc-text"
    :class="[
      color ? 'lc-text-custom' : `lc-text-${type}`,
      disabled ? `lc-text-${type}-disabled` : ''
    ]"
    :style="[{ letterSpacing: `${textSpace}px` }]"
  >
    <loading-icon class="lc-text-loading" v-if="loading" />
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
  import { LoadingIcon } from '../../icons'
  import { textProps } from './text'
  const props = defineProps(textProps)
</script>
