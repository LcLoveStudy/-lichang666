/**
 * validate if a string is a valid hex color
 * @param {string} color target `string`
 * @returns {boolean}
 * @example
 * isHexColor('#fff') // true
 * isHexColor('#fff1341') // false
 */
export const isHexColor = (color: string): boolean => {
  // 去除前缀'#'
  const hex = color.replace('#', '')
  // 验证长度
  if (hex.length === 3 || hex.length === 6) {
    // 使用正则表达式检查每个字符是否都是有效的十六进制数
    const regex = /^[0-9A-Fa-f]+$/
    return regex.test(hex)
  }
  return false
}
