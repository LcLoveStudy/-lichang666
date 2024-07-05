---
outline: deep
---

# dayOfYear

获取目标日期是当年的第几天

### 基础用法

| 参数名 | 参数类型 | 是否必传 | 参数说明 |
| ------ | -------- | -------- | -------- |
| date   | `Date`   | 是       | 目标日期 |

#### 返回

`number`

```ts
import { dayOfYear } from '@lichang666/utils'
dayOfYear('2023-01-01') // 1
dayOfYear('2023-12-31') // 365
```

### demo

<div class="example-box">
    <input type="date" class="date-selecter" v-model="selectDate" @change="dateChangeHandler" />
    <span class="date-show"> 是当年的第{{ atDay }}天 </span>
</div>

<script lang="ts" setup>
    import {dayOfYear} from '@lichang666/utils'
    import {ref} from 'vue'
    const selectDate = ref('')
    const atDay = ref(0)
    const dateChangeHandler = ()=>{
        atDay.value = dayOfYear(new Date(selectDate.value))
    }
</script>

```vue
<template>
  <input type="date" v-model="selectDate" @change="dateChangeHandler" />
  <span>是当年的第{{ atDay }}天</span>
</template>

<script lang="ts" setup>
  import { dayOfYear } from '@lichang666/utils'
  import { ref } from 'vue'
  const selectDate = ref('')
  const atDay = ref(0)
  const dateChangeHandler = () => {
    atDay.value = dayOfYear(new Date(selectDate.value))
  }
</script>
```

<style scoped>
.example-box{
   margin:20px 0;
}
.date-selecter{
    border:1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
}
.date-show{
    margin-left: 8px;
    color: #666;
}
</style>
