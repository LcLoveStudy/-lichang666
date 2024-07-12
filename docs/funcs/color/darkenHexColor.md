---
outline: deep
---

# darkenHexColor

将16进制颜色调暗指定百分比

### 基础用法

| 参数名  | 参数类型 | 是否必传 | 参数说明             |
| ------- | -------- | -------- | -------------------- |
| hex     | `string` | 是       | 需要调整的16进制颜色 |
| percent | `number` | 是       | 调暗的百分比         |

#### 返回

`string`

```ts
import { darkenHexColor } from '@lichang666/utils'

darkenHexColor('#fff', 50) // #7f7f7f
```
