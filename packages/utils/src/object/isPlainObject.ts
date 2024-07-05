/**
 * check if the `value` is a `plain object`
 * @param {unknown} value - the value to check
 * @return `true` if the value is a plain object, `false` otherwise
 */
export const isPlainObject = (value: unknown): boolean => {
  if (value === null || typeof value !== 'object') return false
  return !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype
}
