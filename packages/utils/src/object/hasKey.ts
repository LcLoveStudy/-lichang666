/**
 *  judge if the `value` is `key` of the object
 * @param {object} obj target object
 * @param {string} key target key
 * @returns boolean
 * @example hasKey({a: 1, b: 2}, 'a') // true
 * @example hasKey({a: 1, b: 2}, 'c') // false
 */
export const hasKey = (obj: object, key: string): boolean => {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) return false
  return key in obj
}
