---
outline: deep
---

# deepClone

深度克隆`对象`或`数组`,返回`新对象`存储地址相互独立

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明 |
| ------ | -------- | -------- | -------- |
| oldObj | `T`      | 是       | 目标对象 |

#### 返回

`T`

```ts
import { deepClone } from '@lichang666/utils'

deepClone(2) // 2
deepClone({
  a: 1,
  b: '1'
}) // { a: 1, b: '1' }
deepClone([1, 2, 3]) // [1, 2, 3]
```
