---
outline: deep
---

# debounce

防抖函数

### 基础用法

| 参数名 | 参数类型   | 是否必传 | 参数说明             |
| ------ | ---------- | -------- | -------------------- |
| fn     | `function` | 是       | 需要防抖的函数       |
| delay  | `number`   | 是       | 延迟时间，单位为毫秒 |

```ts
import { debounce } from '@lichang666/utils'

const inputHandler = debounce(() => {
  //do some things
}, 1000)
```

### demo

<input v-model="inputValue" @input="inputHandler" placeholder="输入1秒后才会显示" class="copy_demo_input" />
<span>输入值:{{ showValue }}</span>

<script lang="ts" setup>
    import {debounce} from '@lichang666/utils'
    import {ref} from 'vue'
    const inputValue = ref('')
    const showValue = ref('')
    const inputHandler = debounce(() => {
        showValue.value = inputValue.value
    }, 1000)
</script>

```vue
<input v-model="inputValue" @input="inputHandler" />
<span>输入值:{{ showValue }}</span>

<script lang="ts" setup>
  import { debounce } from '@lichang666/utils'
  import { ref } from 'vue'
  const inputValue = ref('')
  const showValue = ref('')
  const inputHandler = debounce(() => {
    showValue.value = inputValue.value
  }, 1000)
</script>
```

<style scoped>
.copy_demo_input{
    margin:10px 20px;
    border:1px solid #ccc;
    padding:2px 10px;
    border-radius:5px;
}
</style>
