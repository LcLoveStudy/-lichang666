import {
  lightenHexColor,
  darkenHexColor,
  hexToRgbaWithOpacity,
  isHexColor
} from '@lichang666/utils'
import { computed } from 'vue'
/** custom color computed */
export const customColorComputed = (color: string) => {
  const isHex = color && isHexColor(color)
  if (!isHex) {
    console.error(`LcButton Error\n${color} is not a hex color `)
  }
  //custom color hover cumputed
  const hoverBgColor = computed(() => {
    return isHex ? lightenHexColor(color, 5) : ''
  })
  //custom color active cumputed
  const activeBgColor = computed(() => {
    return isHex ? darkenHexColor(color, 5) : ''
  })
  //custom color disabled cumputed
  const disabledBgColor = computed(() => {
    return isHex ? hexToRgbaWithOpacity(color, 60) : ''
  })
  //custom color plain computed
  const plainBgColor = computed(() => {
    return isHex ? hexToRgbaWithOpacity(color, 10) : ''
  })
  return {
    hoverBgColor,
    activeBgColor,
    disabledBgColor,
    plainBgColor
  }
}
