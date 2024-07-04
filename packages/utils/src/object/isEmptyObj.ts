/**
 * 判断一个对象是否为空对象
 * @param {obejct} obj 目标对象
 * @returns boolean
 */
export const isEmptyObj = (obj: object): boolean => JSON.stringify(obj) === '{}'
