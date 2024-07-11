import { lightenHexColor, darkenHexColor, hexToRgbaWithOpacity } from '@lichang666/utils'
import { computed } from 'vue'
/** custom color computed */
export const customColorComputed = (color: string) => {
  //custom color hover cumputed
  const hoverBgColor = computed(() => {
    return color ? lightenHexColor(color, 5) : ''
  })
  //custom color active cumputed
  const activeBgColor = computed(() => {
    return color ? darkenHexColor(color, 5) : ''
  })
  //custom color disabled cumputed
  const disabledBgColor = computed(() => {
    return color ? hexToRgbaWithOpacity(color, 60) : ''
  })
  return {
    hoverBgColor,
    activeBgColor,
    disabledBgColor
  }
}
