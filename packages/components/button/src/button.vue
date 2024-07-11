<template>
  <button
    class="lc-button"
    :class="[`lc-button-${type}`, color ? 'lc-button-custom' : '']"
    :disabled="disabled || loading"
  >
    <div class="lc-button-content">
      <loading-icon class="lc-button-loading" v-show="loading" />
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
  import { type PropType } from 'vue'
  import LoadingIcon from '../../icons/loading.vue'
  import { customColorComputed } from './custom-color'
  const props = defineProps({
    type: {
      type: String as PropType<'primary' | 'warning'>,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  })
  const { hoverBgColor, activeBgColor, disabledBgColor } = customColorComputed(
    props.color as string
  )
</script>

<style lang="less" scoped>
  .lc-button-custom {
    background: v-bind(color);
    border-color: v-bind(color);
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
  }
</style>
