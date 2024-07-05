import { isDate } from './isDate'
import { isDateLike } from './isDateLike'

/**
 * 获取某个日期位于当年的第几天
 * @param {Date} date 日期对象
 * @example
 * dayOfYear(new Date('2023-2-1')) --> 32
 */
export const dayOfYear = (date: Date | string | number) => {
  if (isDate(date)) {
    date = date as Date
    return Math.floor(
      (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
    )
  } else if (isDateLike(date)) {
    let d = new Date(date as string | number)
    return Math.floor(
      (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
    )
  } else {
    throw new Error('dayOfYear: date is not a valid Date object')
  }
}
