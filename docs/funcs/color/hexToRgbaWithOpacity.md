---
outline: deep
---

# hexToRgbaWithOpacity

将16进制颜色透明指定百分比

### 基础用法

| 参数名  | 参数类型 | 是否必传 | 参数说明             |
| ------- | -------- | -------- | -------------------- |
| hex     | `string` | 是       | 需要调整的16进制颜色 |
| percent | `number` | 是       | 透明百分比           |

#### 返回

`string`

```ts
import { hexToRgbaWithOpacity } from '@lichang666/utils'

hexToRgbaWithOpacity('#8b5cf6', 60) //rgba(139, 92, 246, 0.6)
```
