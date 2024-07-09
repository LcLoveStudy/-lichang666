---
outline: deep
---

# isDate

判断一个值是否为`Date`类型

### 基础用法

| 参数名 | 参数类型  | 是否必传 | 参数说明 |
| ------ | --------- | -------- | -------- |
| param  | `unknown` | 是       | 目标参数 |

#### 返回

`boolean`

```ts
import { isDate } from '@lichang666/utils'
isDate(new Date('2022-1-1')) // true
isDate('2022-1-1') // false 可以使用 isDateLike
isDate(2022) // false
```
