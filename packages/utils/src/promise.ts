/** 判断是否是满足Promsie A+ 规范 */
export const isPromiseLike = (value: unknown) => {
  return value instanceof Promise && typeof value.then === 'function'
}
