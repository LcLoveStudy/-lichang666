---
outline: deep
---

# isDateLike

判断目标日期是否是`Date`类型或者是否可以被转换为`Date`类型

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明 |
| ------ | -------- | -------- | -------- |
| date   | `Date`   | 是       | 目标日期 |

#### 返回

`number`

```ts
import { isDateLike } from '@lichang666/utils'
const obj = {
  a: 1,
  b: '1'
}
isDateLike(obj, 'a') // true
isDateLike(obj, 'c') // false
```
