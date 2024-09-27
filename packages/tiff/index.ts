import 'tiff.js'
const getTiffBase64 = async (url: string) => {
  const suffix = url.split('/')[url.split('/').length - 1]
  if (suffix.indexOf('tif')) {
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    Tiff.initialize({ TOTAL_MEMORY: 16777216 * 10 }) // 初始化 tiff.js，可以根据需要调整内存大小
    const tiff = new Tiff({ buffer })
    return tiff.toDataURL()
  }
}

export default getTiffBase64
