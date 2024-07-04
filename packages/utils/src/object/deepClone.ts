/**
 * 深拷贝对象，不会改变原对象
 * @param {*} oldObj 目标对象
 * @returns 复制后的对象
 * @example let newObj = deepClone(oldObj)
 * @author 李畅
 * @email dotb116393@163.com
 */
export const deepClone = <T>(oldObj: T): T => JSON.parse(JSON.stringify(oldObj))
