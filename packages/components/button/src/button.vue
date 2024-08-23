<template>
  <button
    class="lc-button"
    :class="[
      color ? 'lc-button-custom' : type ? `lc-button-${type}` : 'lc-button-default',
      { 'lc-button-plain': plain && !text },
      { 'lc-button-round': round && !text },
      { 'lc-button-circle': circle && !text },
      { 'lc-button-text': text }
    ]"
    :style="[{ letterSpacing: `${textSpace}px` }]"
    :disabled="disabled || loading"
  >
    <loading-icon class="lc-button-loading" v-if="loading" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { LoadingIcon } from '../../icons'
  import { buttonProps } from './button'
  import { customColorComputed } from './custom-color-computed'
  const props = defineProps(buttonProps)
  const { hoverBgColor, activeBgColor, disabledBgColor, plainBgColor } = props.color
    ? customColorComputed(props.color as string)
    : {
        hoverBgColor: '',
        activeBgColor: '',
        disabledBgColor: '',
        plainBgColor: ''
      }
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
