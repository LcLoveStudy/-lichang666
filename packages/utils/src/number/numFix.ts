/**
 * @description: 保留小数点后几位(四舍五入)
 * @param {number} num 需要处理的数字
 * @param {number} decimal 小数点后位数
 * @return {number} 处理后的数字
 */
export const numFix = (num: number, decimal: number): number => {
  return Number(num.toFixed(decimal))
}
