---
outline: deep
---

# fileDownload

下载指定文件

### 基础用法

| 参数名  | 参数类型              | 是否必传 | 参数说明 |
| ------- | --------------------- | -------- | -------- |
| options | `FileDownloadOptions` | 是       | 下载参数 |

#### 返回

`void`

```ts
import { fileDownload } from '@lichang666/utils'

fileDownload({
  url: 'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024',
  fileName: 'img.jpeg',
  error: (err) => {
    /** 下载失败的回调 */
    console.log(err)
  },
  success: () => {
    /** 下载成功的回调 */
    console.log('下载成功')
  },
  progress: (percentage: string, event: ProgressEvent) => {
    /** 下载事件 */
    console.log(percentage, event)
  }
})
```
