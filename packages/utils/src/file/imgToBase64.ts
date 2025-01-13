/**
 * 将图片文件转换为 Base64 字符串
 * @param file - 图片文件对象，类型为 File
 * @returns 返回一个 Promise，成功时返回转换后的 Base64 字符串，失败时返回空字符串
 */
export const imgToBase64 = async (file: File): Promise<string> => {
  // 如果文件为空，直接返回空字符串
  if (!file) return ''
  // 判断文件是否是图片类型
  if (!file.type.startsWith('image/')) {
    return ''
  }
  try {
    const result = await new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
    return result as string
  } catch {
    return ''
  }
}
