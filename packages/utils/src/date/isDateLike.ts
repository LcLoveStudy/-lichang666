/** 判断参数是否是Date或者是否能被转换为Date类型
 * @param {unknown} param 参数
 * @returns {boolean} 是否是Date类型
 */
export const isDateLike = (param: unknown): boolean => {
  if (param instanceof Date) return true
  if (typeof param !== 'string' && typeof param !== 'number') return false
  if (param === '') return false
  const date = new Date(param as string | number)
  return date instanceof Date && !isNaN(date.getTime())
}
