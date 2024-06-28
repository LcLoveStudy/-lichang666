/**
 * 复制内容到剪贴板
 * @param {string} content 要复制的内容
 * @example
 * getCopy('这是测试文字')
 */
export const copyTxt = (content: string) => {
  return new Promise((reslove, reject) => {
    try {
      navigator.clipboard.writeText(content) // 把要复制的内容拷贝到剪贴板
      reslove(1)
    } catch (ex) {
      reject('复制失败')
    }
  })
}
