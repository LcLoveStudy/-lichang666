---
outline: deep
---

# isNumber

判断参数是否是`number`类型

### 基础用法

| 参数名 | 参数类型  | 是否必传 | 参数说明       |
| ------ | --------- | -------- | -------------- |
| value  | `unknown` | 是       | 需要判断的参数 |

#### 返回

`boolean`

```ts
import { isNumber } from '@lichang666/utils'

isNumber('123') // false
isNumber(123) // true
```
