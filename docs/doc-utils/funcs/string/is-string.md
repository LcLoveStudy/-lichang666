---
outline: deep
---

# isString

判断参数是否是`string`类型

### 基础用法

| 参数名 | 参数类型  | 是否必传 | 参数说明       |
| ------ | --------- | -------- | -------------- |
| value  | `unknown` | 是       | 需要判断的参数 |

#### 返回

`boolean`

```ts
import { isString } from '@lichang666/utils'

isString('123') // true
isString(123) // false
```
