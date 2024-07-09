---
outline: deep
---

# stringSize

获取`string`的长度,如果有零宽字符`unicode`,会获取转换后的长度

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明   |
| ------ | -------- | -------- | ---------- |
| s      | `string` | 是       | 目标字符串 |

#### 返回

`number`

```ts
import { stringSize } from '@lichang666/utils'

stringSize('你好') // 2
stringSize('你好\u200b') // 3
```
