# Card 卡片

一个用于展示的容器

## 基本用法

卡片默认的样式
<lc-card>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos qui sunt exercitationem
dolorum possimus iusto labore, consectetur ipsum accusantium quaerat minima repellat
reprehenderit aut at totam consequuntur autem delectus.
</lc-card>

<script setup lang="ts">
    import {LcCard} from '@lichang666/lc-design-vue'
</script>

```vue
<template>
  <lc-card>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos qui sunt exercitationem
    dolorum possimus iusto labore, consectetur ipsum accusantium quaerat minima repellat
    reprehenderit aut at totam consequuntur autem delectus.
  </lc-card>
</template>
<script setup lang="ts">
  import { LcCard } from '@lichang666/lc-design-vue'
</script>
```

## 阴影效果

Card阴影有三种选择 `aways` `hover` `never` ,默认为`aways`

<div class="show-box">
  <lc-card>
     aways
  </lc-card>

  <lc-card shadow="hover">
    hover
  </lc-card>

  <lc-card shadow="never">
    never
  </lc-card>
</div>

```vue
<template>
  <lc-card>aways</lc-card>

  <lc-card shadow="hover">hover</lc-card>

  <lc-card shadow="never">never</lc-card>
</template>
<script setup lang="ts">
  import { LcCard } from '@lichang666/lc-design-vue'
</script>
```

## 边框

<div class="show-box">
  <lc-card shadow="hover">
    border
  </lc-card>

  <lc-card shadow="hover" :border="false">
    no border
  </lc-card>
</div>

```vue
<template>
  <lc-card shadow="hover">border</lc-card>
  <lc-card shadow="hover" :border="false">no border</lc-card>
</template>

<script setup lang="ts">
  import { LcCard } from '@lichang666/lc-design-vue'
</script>
```

## 属性

| 属性名 | 类型      | 默认值  | 说明                        |
| ------ | --------- | ------- | --------------------------- |
| shadow | `string`  | 'aways' | 阴影效果`aways/hover/never` |
| border | `boolean` | true    | 是否有边框                  |

<style>
.show-box{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>
