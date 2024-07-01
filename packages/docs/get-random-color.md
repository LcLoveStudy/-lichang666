---
outline: deep
---

# getRandomColor

获取随机`16进制颜色`

### 基础用法

```ts
import { getRandomColor } from '@lichang666/utils'

getRandomColor() // 随机颜色
```

### demo

点击按钮获取随机颜色方块

<div>
<button class="get-color-btn" @click="getColor">获取颜色</button>
<span class="show-color-box" :style="{backgroundColor: color}">{{color}}</span>
</div>

<script setup lang="ts">
    import {getRandomColor} from '@lichang666/utils'
    import {ref} from 'vue'
    const color = ref(getRandomColor())
    const getColor = ()=>{
        color.value = getRandomColor()
    }
</script>

```vue
<template>
  <button @click="getColor">获取颜色</button>
  <div :style="{ backgroundColor: color }">{{ color }}</div>
</template>

<script setup lang="ts">
  import { getRandomColor } from '@lichang666/utils'
  import { ref } from 'vue'
  const color = ref(getRandomColor())
  const getColor = () => {
    color.value = getRandomColor()
  }
</script>
```

<style scoped>
.get-color-btn{
    border-radius: 5px;
    border:1px solid #ccc;
    padding: 5px 10px;
    cursor: pointer;
}  
.show-color-box{
    margin-left: 50px;
    border-radius: 5px;
    width: 100px;
    height: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color:#fff;
}
</style>
