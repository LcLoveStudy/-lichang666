/**
 * 通用文件转 Base64 字符串（支持图片、视频、文档等）
 * @param file - 文件对象，类型为 File 或 Blob
 * @param maxSizeMB - 最大文件大小限制（单位：MB，默认 20MB）
 * @returns 成功返回 Base64 字符串，失败返回空字符串
 */
export const fileToBase64 = async (file: File | Blob, maxSizeMB: number = 20): Promise<string> => {
  if (!file) return ''

  const maxSizeBytes = maxSizeMB * 1024 * 1024
  if ('size' in file && file.size > maxSizeBytes) {
    console.warn(`文件大小超出限制：${(file.size / 1024 / 1024).toFixed(2)}MB > ${maxSizeMB}MB`)
    return ''
  }

  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result
      resolve(typeof result === 'string' ? result : '')
    }
    reader.onerror = () => resolve('')
  })
}
