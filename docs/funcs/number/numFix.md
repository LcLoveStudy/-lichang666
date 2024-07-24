---
outline: deep
---

# numFix

将传入的 `number` 类型参数保留指定位数(`四舍五入`)

### 基础用法

| 参数名  | 参数类型 | 是否必传 | 参数说明 |
| ------- | -------- | -------- | -------- |
| value   | `number` | 是       | 目标数字 |
| decimal | `number` | 是       | 保留位数 |

#### 返回

`boolean`

```ts
import { numFix } from '@lichang666/utils'

numFix(12.11, 1) // 12.1
numFix(12.56, 1) // 12.6
```
