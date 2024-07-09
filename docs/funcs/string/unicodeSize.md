---
outline: deep
---

# unicodeSize

获取包含 `unicode` 字符串编码长度

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明   |
| ------ | -------- | -------- | ---------- |
| s      | `string` | 是       | 目标字符串 |

#### 返回

`number`

```ts
import { unicodeSize } from '@lichang666/utils'

unicodeSize('你好') // 2
unicodeSize('你好\u200b') // 3
```
