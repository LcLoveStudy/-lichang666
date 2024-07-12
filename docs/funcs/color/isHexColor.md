---
outline: deep
---

# isHexColor

判断`string`是否为16进制颜色

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明           |
| ------ | -------- | -------- | ------------------ |
| color  | `string` | 是       | 需要判断的`string` |

#### 返回

`boolean`

```ts
import { isHexColor } from '@lichang666/utils'

isHexColor('#fff') // true
isHexColor('#ffffff') // true
isHexColor('#fff00') // false
```
