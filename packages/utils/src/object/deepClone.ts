/**
 * 深拷贝对象，不会改变原对象
 * @param {*} oldObj 目标对象
 * @returns 复制后的对象
 * @example let newObj = deepClone(oldObj)
 * @author 李畅
 * @email dotb116393@163.com
 */
export const deepClone = <T>(oldObj: T): T => {
  //handle !object and null
  if (
    typeof oldObj !== 'object' ||
    oldObj === null ||
    oldObj instanceof WeakMap ||
    oldObj instanceof WeakSet
  )
    return oldObj
  //handle Date
  if (oldObj instanceof Date) return new Date(oldObj.getTime()) as T
  //handle Map
  if (oldObj instanceof Map) {
    let newMap = new Map()
    oldObj.forEach((value, key) => {
      newMap.set(key, deepClone(value))
    })
    return newMap as T
  }
  //handle Set
  if (oldObj instanceof Set) {
    let newSet = new Set()
    oldObj.forEach((value) => {
      newSet.add(deepClone(value))
    })
    return newSet as T
  }
  return JSON.parse(JSON.stringify(oldObj))
}
