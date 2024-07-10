<template>
  <button
    class="lc-button"
    :class="[`lc-button-${type}`, color ? 'lc-button-custom' : '']"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { computed, type PropType } from 'vue'
  import { lightenHexColor, darkenHexColor, hexToRgbaWithOpacity } from '@lichang666/utils'
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
    }
  })
  //custom color hover cumputed
  const hoverBgColor = computed(() => {
    return props.color === '' ? '' : lightenHexColor(props.color as string, 5)
  })
  //custom color active cumputed
  const activeBgColor = computed(() => {
    return props.color === '' ? '' : darkenHexColor(props.color as string, 5)
  })
  //custom color disabled cumputed
  const disabledBgColor = computed(() => {
    return props.color === '' ? '' : hexToRgbaWithOpacity(props.color as string, 60)
  })
</script>

<style lang="less" scoped>
  .lc-button-custom {
    background-color: v-bind(color);
    border-color: v-bind(color);
    &:hover {
      background-color: v-bind(hoverBgColor);
    }
    &:active {
      background-color: v-bind(activeBgColor);
    }
    &:disabled {
      background-color: v-bind(disabledBgColor);
      cursor: not-allowed;
    }
  }
</style>
