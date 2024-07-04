---
outline: deep
---

# hasUnicode

判断字符串中是否包含 `Unicode` 字符

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明   |
| ------ | -------- | -------- | ---------- |
| s      | `string` | 是       | 目标字符串 |

#### 返回

`boolean`

```ts
import { hasUnicode } from '@lichang666/utils'

hasUnicode('你好') // false
hasUnicode('你好\u200b') // true
```
