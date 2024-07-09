---
outline: deep
---

# isArray

判断一个值是否为`Array`类型

### 基础用法

| 参数名 | 参数类型  | 是否必传 | 参数说明 |
| ------ | --------- | -------- | -------- |
| target | `unknown` | 是       | 目标参数 |

#### 返回

`boolean`

```ts
import { isArray } from '@lichang666/utils'
isArray([]) // true
isArray('2022-1-1') // false
isArray(2022) // false
```
