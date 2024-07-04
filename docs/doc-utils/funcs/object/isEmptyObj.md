---
outline: deep
---

# isEmptyObj

判断对象是否为空

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明 |
| ------ | -------- | -------- | -------- |
| obj    | `object` | 是       | 目标对象 |

#### 返回

`boolean`

```ts
import { isEmptyObj } from '@lichang666/utils'
const obj = {
  a: 1,
  b: '1'
}
isEmptyObj(obj) // false
isEmptyObj({}) // true
```
