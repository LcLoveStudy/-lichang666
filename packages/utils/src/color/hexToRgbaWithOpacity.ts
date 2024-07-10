/**
 * 将16进制颜色透明指定百分比
 * @param hex 16进制颜色
 * @param percent 透明百分比
 * @returns 透明后的颜色(RGBA)
 * @example lightenHexColor('#8b5cf6',60) //rgba(139, 92, 246, 0.6)
 */
export const hexToRgbaWithOpacity = (hex: string, opacityPercent: number) => {
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
