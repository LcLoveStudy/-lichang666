/**
 * judge `value` is number
 * @param {unknown} value `value` to judge
 * @returns boolean
 */
export const isNumber = (value: unknown) => {
  return typeof value === 'number' && !Number.isNaN(value)
}
