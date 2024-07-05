/**
 * 获取某个日期位于当年的第几天
 * @param {Date} date 日期对象
 * @example
 * dayOfYear(new Date('2023-2-1')) --> 32
 */
export const dayOfYear = (date: Date) => {
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
  )
}
