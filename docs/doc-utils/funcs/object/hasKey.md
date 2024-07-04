---
outline: deep
---

# hasKey

判断对象是否具有某个键

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明  |
| ------ | -------- | -------- | --------- |
| obj    | `object` | 是       | 目标对象  |
| key    | `string` | 是       | 索引的key |

#### 返回

`boolean`

```ts
import { hasKey } from '@lichang666/utils'
const obj = {
  a: 1,
  b: '1'
}
hasKey(obj, 'a') // true
hasKey(obj, 'c') // false
```
