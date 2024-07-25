<template>
  <button
    class="lc-button"
    :class="[
      color ? 'lc-button-custom' : type ? `lc-button-${type}` : 'lc-button-default',
      { 'lc-button-plain': plain },
      { 'lc-button-round': round },
      { 'lc-button-circle': circle }
    ]"
    :style="[{ letterSpacing: `${textSpace}px` }]"
    :disabled="disabled || loading"
  >
    <div class="lc-button-content">
      <loading-icon class="lc-button-loading" v-show="loading" />
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
  import { LoadingIcon } from '../../icons'
  import { buttonProps } from './button'
  import { customColorComputed } from './custom-color-computed'
  const props = defineProps(buttonProps)
  const { hoverBgColor, activeBgColor, disabledBgColor, plainBgColor } = customColorComputed(
    props.color as string
  )
</script>

<style lang="less" scoped>
  .lc-button-custom {
    background: v-bind(color);
    border-color: v-bind(color);
    .lc-button-loading {
      fill: #fff;
    }
    &:hover {
      background-color: v-bind(hoverBgColor);
    }
    &:active {
      background-color: v-bind(activeBgColor);
    }
    &::after {
      box-shadow: 0 0 10px v-bind(activeBgColor);
    }

    &:disabled {
      border-color: v-bind(disabledBgColor);
      background-color: v-bind(disabledBgColor);
      cursor: not-allowed;
    }
    &.lc-button-plain {
      background-color: v-bind(plainBgColor);
      color: v-bind(color);
      .lc-button-loading {
        fill: v-bind(color);
      }
      &:hover {
        background-color: v-bind(color);
        color: #fff;
      }
      &:disabled {
        border-color: v-bind(disabledBgColor);
        background-color: v-bind(plainBgColor);
        color: v-bind(disabledBgColor);
        cursor: not-allowed;
      }
    }
  }
</style>
