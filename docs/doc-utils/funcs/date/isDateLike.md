---
outline: deep
---

# isDateLike

参数是否是`Date`类型或者是否可以被转换为`Date`类型

### 基础用法

| 参数名 | 参数类型  | 是否必传 | 参数说明     |
| ------ | --------- | -------- | ------------ |
| date   | `unknown` | 是       | 要检测的参数 |

#### 返回

`boolean`

```ts
import { isDateLike } from '@lichang666/utils'
isDateLike('2022-01-01') // true
isDateLike(new Date()) // true
isDateLike({}) // false
```
