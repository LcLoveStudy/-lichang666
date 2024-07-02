---
outline: deep
---

# copyTxt

将指定文本`string`复制到剪贴板

### 基础用法

```ts
import { copyTxt } from '@lichang666/utils'

copyTxt('hello world') // 复制文本
```

### demo

<input v-model="inputValue" class="copy_demo_input" placeholder="请输入要复制的文本" />
<button class="base-btn" @click="copyHandler">{{ copyStatus }}</button>

<script setup lang="ts">
    import { copyTxt } from '@lichang666/utils'
    import {ref} from 'vue'
    const copyStatus = ref('复制')
    const inputValue = ref('')
    const copyHandler = () => {
        if(inputValue.value === '') return
        copyTxt(inputValue.value).then(()=>{
            copyStatus.value = '已复制'
            setTimeout(()=>{
                copyStatus.value = '复制'
            },1000)
        }).catch(()=>{
            copyStatus.value = '复制失败'
            setTimeout(()=>{
                copyStatus.value = '复制'
            },1000)
        })
    }
</script>

<style scoped>
.base-btn{
    border-radius: 5px;
    border:1px solid #ccc;
    padding: 5px 10px;
    cursor: pointer;
} 
.copy_demo_input{
    margin:10px 20px;
    border:1px solid #ccc;
    padding:2px 10px;
    border-radius:5px;
}
</style>

```vue
<template>
  <input v-model="inputValue" placeholder="请输入要复制的文本" />
  <button @click="copyHandler">{{ copyStatus }}</button>
</template>

<script setup lang="ts">
  import { copyTxt } from '@lichang666/utils'
  import { ref } from 'vue'
  const copyStatus = ref('复制')
  const inputValue = ref('')
  const copyHandler = () => {
    if (inputValue.value === '') return
    copyTxt(inputValue.value)
      .then(() => {
        copyStatus.value = '已复制'
        setTimeout(() => {
          copyStatus.value = '复制'
        }, 1000)
      })
      .catch(() => {
        copyStatus.value = '复制失败'
        setTimeout(() => {
          copyStatus.value = '复制'
        }, 1000)
      })
  }
</script>
```
