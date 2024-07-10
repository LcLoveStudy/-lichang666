/**
 * 将16进制颜色调亮指定百分比
 * @param hex 16进制颜色
 * @param percent 调亮百分比
 * @returns 调亮后的颜色(16进制)
 * @example lightenHexColor('#8b5cf6',5) //#9869ff
 */
export const lightenHexColor = (hex: string, percent: number) => {
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
