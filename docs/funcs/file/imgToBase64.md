---
outline: deep
---

# imgToBase64

将图片转换为 base64

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明 |
| ------ | -------- | -------- | -------- |
| file   | `File`   | 是       | 图片文件 |

#### 返回

`Promise<string>` base64 字符串

```ts
import { imgToBase64 } from '@lichang666/utils'
import ExampleFile from '@/assets/example.png'
const base64Str = await imgToBase64(ExampleFile)
```
