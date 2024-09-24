export type FileDownloadOptions = {
  url: string
  fileName: string
  error?: (error: ProgressEvent) => void
  success?: () => void
  progress?: (percentage: string, event: ProgressEvent) => void
}
/**
 * 文件下载
 * @param options
 */
export const fileDownload = (options: FileDownloadOptions) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', options.url, true)
  xhr.responseType = 'blob' // 返回类型blob
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const blob = this.response
      // 转换一个blob链接
      const u = window.URL.createObjectURL(new Blob([blob]))
      const a = document.createElement('a')
      a.download = options.fileName
      a.href = u
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      a.remove()
      // 释放
      window.URL.revokeObjectURL(u)
      options.success && options.success()
    }
  }
  xhr.onprogress = function (e: ProgressEvent) {
    let progress = ((e.loaded / e.total) * 100).toFixed(0) + '%'
    options.progress && options.progress(progress, e)
  }
  xhr.onerror = function (error: ProgressEvent) {
    options.error && options.error(error)
  }
  xhr.send()
}
