/**
 * judge if the input is a `Date`
 * @param {unknown} param - the input to be judged
 * @returns {boolean} - `true` if the input is a `Date`, otherwise `false`
 * @example
 * isDate(new Date()) // true
 */
export const isDate = (param: unknown): boolean => {
  return param instanceof Date && !isNaN(param.getTime())
}
