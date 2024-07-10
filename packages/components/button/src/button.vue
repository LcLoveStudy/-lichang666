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
  const lightenHexColor = (hex: string, percent: number) => {
    // 将16进制颜色转换为RGB
    let r = 0,
      g = 0,
      b = 0
    // 3位缩写颜色转换成6位
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16)
      g = parseInt(hex.substring(3, 5), 16)
      b = parseInt(hex.substring(5, 7), 16)
    }
    // 转换有符号整数百分比到0-255的增量
    let increase = (255 * percent) / 100
    // 防止颜色值超过255
    r = Math.min(255, r + Math.round(increase))
    g = Math.min(255, g + Math.round(increase))
    b = Math.min(255, b + Math.round(increase))
    // 将RGB值转换回16进制
    let rr = r.toString(16).padStart(2, '0')
    let gg = g.toString(16).padStart(2, '0')
    let bb = b.toString(16).padStart(2, '0')
    return `#${rr}${gg}${bb}`
  }

  const darkenHexColor = (hex: string, percent: number) => {
    // 将16进制颜色转换为RGB
    let r = 0,
      g = 0,
      b = 0

    // 3位缩写颜色转换成6位
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16)
      g = parseInt(hex.substring(3, 5), 16)
      b = parseInt(hex.substring(5, 7), 16)
    }

    // 转换有符号整数百分比到0-255的减量
    let decrease = (255 * percent) / 100

    // 防止颜色值低于0
    r = Math.max(0, r - Math.round(decrease))
    g = Math.max(0, g - Math.round(decrease))
    b = Math.max(0, b - Math.round(decrease))

    // 将RGB值转换回16进制
    let rr = r.toString(16).padStart(2, '0')
    let gg = g.toString(16).padStart(2, '0')
    let bb = b.toString(16).padStart(2, '0')

    return `#${rr}${gg}${bb}`
  }

  const hexToRgbaWithOpacity = (hex: string, opacityPercent: number) => {
    // 将透明度百分比转换为0到1之间的小数
    let opacity = opacityPercent / 100

    // 提取RGB值
    let r = 0,
      g = 0,
      b = 0
    if (hex.length === 4) {
      // 处理3位缩写颜色
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length === 7) {
      // 处理6位颜色
      r = parseInt(hex.substring(1, 3), 16)
      g = parseInt(hex.substring(3, 5), 16)
      b = parseInt(hex.substring(5, 7), 16)
    }

    // 返回RGBA字符串
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
  const hoverBgColor = computed(() => {
    return props.color === '' ? '' : lightenHexColor(props.color as string, 5)
  })
  const activeBgColor = computed(() => {
    return props.color === '' ? '' : darkenHexColor(props.color as string, 5)
  })
  const disabledBgColor = computed(() => {
    console.log(hexToRgbaWithOpacity(props.color as string, 60))
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
