---
outline: deep
---

# lightenHexColor

将16进制颜色调亮指定百分比

### 基础用法

| 参数名  | 参数类型 | 是否必传 | 参数说明   |
| ------- | -------- | -------- | ---------- |
| hex     | `string` | 是       | 16进制颜色 |
| percent | `number` | 是       | 调亮百分比 |

#### 返回

`string`

```ts
import { lightenHexColor } from '@lichang666/utils'

lightenHexColor('#8b5cf6', 5) //#9869ff
```
