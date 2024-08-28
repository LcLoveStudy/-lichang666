# Button 按钮

一个用于操作的按钮

## 基本用法

使用`type` `plain` `round` `circle` 控制基础样式

<lc-card style="width:100%">
    <div class="show-box">
        <lc-button>default</lc-button>
        <lc-button type="primary">primary</lc-button>
        <lc-button type="error">error</lc-button>
        <lc-button type="warning">warning</lc-button>
    </div>
    <div class="show-box">
        <lc-button plain>default</lc-button>
        <lc-button type="primary" plain>primary</lc-button>
        <lc-button type="error" plain>error</lc-button>
        <lc-button type="warning" plain>warning</lc-button>
    </div>
    <div class="show-box">
        <lc-button round>default</lc-button>
        <lc-button type="primary" round>primary</lc-button>
        <lc-button type="error" round>error</lc-button>
        <lc-button type="warning" round>warning</lc-button>
    </div>
    <div class="show-box">
        <lc-button circle :icon="SearchIcon"></lc-button>
        <lc-button type="primary" circle :icon="SearchIcon"></lc-button>
        <lc-button type="error" circle :icon="SearchIcon"></lc-button>
        <lc-button type="warning" circle :icon="SearchIcon"></lc-button>
    </div>
</lc-card>

<script setup lang="ts">
    import {LcButton,LcCard,SearchIcon} from '@lichang666/design-vue'
</script>

```vue
<template>
  <div class="show-box">
    <lc-button>default</lc-button>
    <lc-button type="primary">primary</lc-button>
    <lc-button type="error">error</lc-button>
    <lc-button type="warning">warning</lc-button>
  </div>
  <div class="show-box">
    <lc-button plain>default</lc-button>
    <lc-button type="primary" plain>primary</lc-button>
    <lc-button type="error" plain>error</lc-button>
    <lc-button type="warning" plain>warning</lc-button>
  </div>
  <div class="show-box">
    <lc-button round>default</lc-button>
    <lc-button type="primary" round>primary</lc-button>
    <lc-button type="error" round>error</lc-button>
    <lc-button type="warning" round>warning</lc-button>
  </div>
  <div class="show-box">
    <lc-button circle :icon="SearchIcon"></lc-button>
    <lc-button type="primary" circle :icon="SearchIcon"></lc-button>
    <lc-button type="error" circle :icon="SearchIcon"></lc-button>
    <lc-button type="warning" circle :icon="SearchIcon"></lc-button>
  </div>
</template>
<script setup lang="ts">
  import { LcButton, SearchIcon } from '@lichang666/design-vue'
</script>
```

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

<lc-card style="width:100%">
    <div class="show-box">
        <lc-button disabled>default</lc-button>
        <lc-button type="primary" disabled>primary</lc-button>
        <lc-button type="error" disabled>error</lc-button>
        <lc-button type="warning" disabled>warning</lc-button>
    </div>
     <div class="show-box">
        <lc-button plain disabled>default</lc-button>
        <lc-button type="primary" plain disabled>primary</lc-button>
        <lc-button type="error" plain disabled>error</lc-button>
        <lc-button type="warning" plain disabled>warning</lc-button>
    </div>
</lc-card>

```vue
<template>
  <div class="show-box">
    <lc-button disabled>default</lc-button>
    <lc-button type="primary" disabled>primary</lc-button>
    <lc-button type="error" disabled>error</lc-button>
    <lc-button type="warning" disabled>warning</lc-button>
  </div>
  <div class="show-box">
    <lc-button plain disabled>default</lc-button>
    <lc-button type="primary" plain disabled>primary</lc-button>
    <lc-button type="error" plain disabled>error</lc-button>
    <lc-button type="warning" plain disabled>warning</lc-button>
  </div>
</template>
<script setup lang="ts">
  import { LcButton } from '@lichang666/design-vue'
</script>
```

## 文字按钮

你可以使用 `text` 属性来定义按钮是文字按钮。当设置为文字按钮时`plain` `round` `circle` 属性将会失效

<lc-card style="width:100%">
    <div class="show-box">
        <lc-button text>default</lc-button>
        <lc-button type="primary" text>primary</lc-button>
        <lc-button type="error" text>error</lc-button>
        <lc-button type="warning" text>warning</lc-button>
    </div>
     <div class="show-box">
        <lc-button text loading>default</lc-button>
        <lc-button type="primary" text loading>primary</lc-button>
        <lc-button type="error" text loading>error</lc-button>
        <lc-button type="warning" text loading>warning</lc-button>
    </div>
</lc-card>

```vue
<template>
  <div class="show-box">
    <lc-button text>default</lc-button>
    <lc-button type="primary" text>primary</lc-button>
    <lc-button type="error" text>error</lc-button>
    <lc-button type="warning" text>warning</lc-button>
  </div>
  <div class="show-box">
    <lc-button text loading>default</lc-button>
    <lc-button type="primary" text loading>primary</lc-button>
    <lc-button type="error" text loading>error</lc-button>
    <lc-button type="warning" text loading>warning</lc-button>
  </div>
</template>
<script setup lang="ts">
  import { LcButton } from '@lichang666/design-vue'
</script>
```

## 文字间距

你可以使用 `textSpace` 属性来定义按钮文字之间的间距。
<lc-card style="width:100%">

<div class="show-box">
    <lc-button type="primary">none</lc-button>
    <lc-button type="primary" :text-space="1">1px间距</lc-button>
    <lc-button type="primary" :text-space="2">2px间距</lc-button>
</div>

</lc-card>

```vue
<template>
  <div class="show-box">
    <lc-button type="primary">none</lc-button>
    <lc-button type="primary" :text-space="1">1px间距</lc-button>
    <lc-button type="primary" :text-space="2">2px间距</lc-button>
  </div>
</template>
<script setup lang="ts">
  import { LcButton } from '@lichang666/design-vue'
</script>
```

## 加载状态

你可以使用 `loading` 属性来定义按钮是否处于加载状态。

<lc-card style="width:100%">
    <div class="show-box">
        <lc-button disabled loading>default</lc-button>
        <lc-button type="primary" loading>primary</lc-button>
        <lc-button type="error" loading>error</lc-button>
        <lc-button type="warning" loading>warning</lc-button>
    </div>
    <div class="show-box">
        <lc-button plain loading>default</lc-button>
        <lc-button type="primary" plain loading>primary</lc-button>
        <lc-button type="error" plain loading>error</lc-button>
        <lc-button type="warning" plain loading>warning</lc-button>
    </div>
</lc-card>

```vue
<template>
  <div class="show-box">
    <lc-button disabled loading>default</lc-button>
    <lc-button type="primary" loading>primary</lc-button>
    <lc-button type="error" loading>error</lc-button>
    <lc-button type="warning" loading>warning</lc-button>
  </div>
  <div class="show-box">
    <lc-button plain loading>default</lc-button>
    <lc-button type="primary" plain loading>primary</lc-button>
    <lc-button type="error" plain loading>error</lc-button>
    <lc-button type="warning" plain loading>warning</lc-button>
  </div>
</template>
<script setup lang="ts">
  import { LcButton } from '@lichang666/design-vue'
</script>
```

## 自定义颜色

你可以使用 `color` 属性来定义按钮的颜色,仅接受`16进制`颜色,当设置了`color` 后 `type`将不再生效。

<lc-card style="width:100%">
    <div class="show-box">
        <lc-button color="#9333ea">custom</lc-button>
        <lc-button color="#9333ea" text>custom</lc-button>
        <lc-button color="#9333ea" disabled>disabled</lc-button>
        <lc-button color="#9333ea" plain>plain</lc-button>
        <lc-button color="#9333ea" plain loading>plain</lc-button>
        <lc-button color="#9333ea" loading>plain</lc-button>
        <lc-button color="#9333ea" round>plain</lc-button>
        <lc-button color="#9333ea" circle loading></lc-button>
    </div>
</lc-card>

```vue
<template>
  <div class="show-box">
    <lc-button color="#9333ea">custom</lc-button>
    <lc-button color="#9333ea" text>custom</lc-button>
    <lc-button color="#9333ea" disabled>disabled</lc-button>
    <lc-button color="#9333ea" plain>plain</lc-button>
    <lc-button color="#9333ea" plain loading>plain</lc-button>
    <lc-button color="#9333ea" loading>plain</lc-button>
    <lc-button color="#9333ea" round>plain</lc-button>
    <lc-button color="#9333ea" circle loading></lc-button>
  </div>
</template>
<script setup lang="ts">
  import { LcButton } from '@lichang666/design-vue'
</script>
```

## 属性

| 属性名    | 类型             | 默认值    | 说明                                           |
| --------- | ---------------- | --------- | ---------------------------------------------- |
| type      | `string`         | `default` | 按钮类型 `primary` `warning` `error` `default` |
| plain     | `boolean`        | `false`   | 是否是朴素按钮                                 |
| icon      | `LcIconInstance` | 无        | 图标                                           |
| disabled  | `boolean`        | `false`   | 是否是禁用                                     |
| loading   | `boolean`        | `false`   | 是否是`loading`状态                            |
| color     | `string`         | 无        | 自定义颜色,仅支持`16进制`                      |
| round     | `boolean`        | `false`   | 是否圆角按钮                                   |
| circle    | `boolean`        | `false`   | 是否圆按钮                                     |
| textSpace | `number`         | `0`       | 按钮文字间距                                   |

<style>
.show-box{
    display:flex;
    margin-bottom:1rem;
    flex-wrap:wrap;
    gap:1rem;
}
.show-box:last-child{
    margin-bottom:0;
}
</style>
