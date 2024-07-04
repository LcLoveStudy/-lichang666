import { hasUnicode } from './hasUnicode'
import { unicodeSize } from './unicodeSize'
/**
 * get `string` size
 * @param {string} s target `string`
 * @returns {number} size of `string`
 */
export const stringSzie = (s: string): number => {
  return hasUnicode(s) ? unicodeSize(s) : s.length
}
