<template>
  <button
    class="lc-text"
    :class="[color ? 'lc-text-custom' : `lc-text-${type}`]"
    :style="[{ letterSpacing: `${textSpace}px` }]"
    :disabled
  >
    <loading-icon class="lc-text-loading" v-if="loading" />
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
  import { customColorComputed } from '../../button/src/custom-color-computed'
  import { LoadingIcon } from '../../icons'
  import { textProps } from './text'
  const props = defineProps(textProps)
  const { disabledBgColor } = props.color
    ? customColorComputed(props.color as string)
    : {
        disabledBgColor: ''
      }
</script>

<style lang="less" scoped>
  .lc-text-custom {
    color: v-bind(color);
    .lc-text-loading {
      fill: v-bind(color);
    }
    &:disabled {
      color: v-bind(disabledBgColor);
      cursor: not-allowed;
    }
  }
</style>
