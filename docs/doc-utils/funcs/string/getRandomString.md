---
outline: deep
---

# getRandomString

获取指定长度的`string`

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明   |
| ------ | -------- | -------- | ---------- |
| length | `number` | 是       | 字符串长度 |

#### 返回

`boolean`

```ts
import { getRandomString } from '@lichang666/utils'

getRandomString(2) // "lf"
getRandomString(5) // "fvead"
```
