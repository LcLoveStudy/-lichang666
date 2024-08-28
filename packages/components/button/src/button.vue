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
    <component v-else-if="icon" :is="icon" />
    <slot v-if="!circle"></slot>
  </button>
</template>

<script setup lang="ts">
  import { LoadingIcon } from '@lichang666/design-vue'
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
    transition:
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      color 0.15s ease-in-out;
    .lc-icon {
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
      .lc-icon {
        fill: v-bind(color);
      }
      &:hover {
        background-color: v-bind(color);
        color: #fff;
        .lc-icon {
          fill: #fff;
        }
      }
      &:disabled {
        border-color: v-bind(disabledBgColor);
        background-color: v-bind(plainBgColor);
        color: v-bind(disabledBgColor);
        cursor: not-allowed;
      }
    }
    // 文字按钮
    &.lc-button-text {
      color: v-bind(color);
      background-color: transparent;
      border-color: transparent;
      &::after {
        box-shadow: none;
      }
      .lc-button-loading {
        fill: v-bind(color);
      }
      &:disabled {
        color: v-bind(disabledBgColor);
      }
    }
    &.lc-button-text:has(.lc-button-loading) {
      color: v-bind(disabledBgColor);
    }
  }
</style>
