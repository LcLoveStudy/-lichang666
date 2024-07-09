---
outline: deep
---

# isPlainObject

判断一个值是否为`普通对象`

### 基础用法

| 参数名 | 参数类型  | 是否必传 | 参数说明 |
| ------ | --------- | -------- | -------- |
| value  | `unknown` | 是       | 目标参数 |

#### 返回

`boolean`

```ts
import { isPlainObject } from '@lichang666/utils'
let a = {}
let b = []
let c = new Date()
isPlainObject(a) // true
isPlainObject(null) // false
isPlainObject(b) // false
isPlainObject(c) // false
```
