---
outline: deep
---

# fileToBase64

将文件转换为 base64 字符串

### 基础用法

| 参数名    | 参数类型 | 是否必传 | 默认值 | 参数说明 |
| --------- | -------- | -------- | ------ | -------- |
| file      | `File`   | 是       | -      | 图片文件 |
| maxSizeMB | `number` | 否       | 20     | 图片文件 |

#### 返回

`Promise<string>` base64 字符串，转换失败或文件过大返回空字符串

```ts
import { fileToBase64 } from '@lichang666/utils'
import ExampleFile from '@/assets/example.png'
const base64Str = await fileToBase64(ExampleFile)
if (base64Str) {
  console.log(base64Str)
} else {
  console.log('转换失败或文件过大')
}
```
