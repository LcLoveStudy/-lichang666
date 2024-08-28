# Input 输入框

通过鼠标或键盘输入字符

## 基本用法

<script setup lang="ts">
    import {ref} from 'vue'
    import {LcCard,LcInput,SearchIcon} from '@lichang666/design-vue'
    const baseValue = ref('')
    const clearValue = ref('')
    const password = ref('')
    const iconValue = ref('')
</script>

<lc-card style="width:100%">
    <lc-input v-model="baseValue" />
</lc-card>

```vue
<template>
  <lc-input v-model="baseValue" />
</template>
<script setup lang="ts">
  import { LcInput } from '@lichang666/design-vue'
  const baseValue = ref('')
</script>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<lc-card style="width:100%">
    <lc-input v-model="baseValue" disabled />
</lc-card>

```vue
<template>
  <lc-input v-model="baseValue" disabled />
</template>
<script setup lang="ts">
  import { LcInput } from '@lichang666/design-vue'
  const baseValue = ref('')
</script>
```

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框
<lc-card style="width:100%">
<lc-input v-model="clearValue" clearable />
</lc-card>

```vue
<template>
  <lc-input v-model="clearValue" clearable />
</template>
<script setup lang="ts">
  import { LcInput } from '@lichang666/design-vue'
  const clearValue = ref('')
</script>
```

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框,默认开启切换
<lc-card style="width:100%">
<lc-input v-model="password" type="password" />
</lc-card>

```vue
<template>
  <lc-input v-model="password" type="password" />
</template>
<script setup lang="ts">
  import { LcInput } from '@lichang666/design-vue'
  const password = ref('')
</script>
```

## 带图标的输入框

带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。
<lc-card style="width:100%;display:flex; flex-wrap:wrap;justify-content:space-around">
<lc-input :prefix-icon="SearchIcon" />
<lc-input :suffix-icon="SearchIcon" />
<lc-input style="margin-top:20px">
<template #prefix>
<SearchIcon />
</template>
</lc-input>
<lc-input style="margin-top:20px">
<template #suffix>
<SearchIcon />
</template>
</lc-input>
</lc-card>

```vue
<template>
  <lc-input :prefix-icon="SearchIcon" />
  <lc-input v-model="iconValue" :suffix-icon="SearchIcon" />
  <lc-input v-model="iconValue">
    <template #prefix>
      <SearchIcon />
    </template>
  </lc-input>
  <lc-input v-model="iconValue">
    <template #suffix>
      <SearchIcon />
    </template>
  </lc-input>
</template>
<script setup lang="ts">
  import { LcInput, SearchIcon } from '@lichang666/design-vue'
  const iconValue = ref('')
</script>
```
