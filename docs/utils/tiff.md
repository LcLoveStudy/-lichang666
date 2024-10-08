---
outline: deep
---

# @lichang666/tiff

使用`@lichang666/tiff`可以实现`TIFF`图片的读取。

### 安装

推荐使用`pnpm`进行安装，以获得最佳性能。

```bash
pnpm add @lichang666/tiff
```

### 使用

默认导出一个异步方法，将`TIFF`文件转换为`base64`格式。

<img ref="imgRef" class="img-example" />

<script lang="ts" setup>
    import {ref,onMounted} from 'vue'
    import TestTiff from './bali.tif'
    import getTiffBase64 from '@lichang666/tiff'
    const imgRef = ref<HTMLImageElement>()
    onMounted(async()=>{
        const imgBase64 = await getTiffBase64(TestTiff)
        imgRef.value.src = imgBase64
    })
</script>

```vue
<template>
  <img ref="imgRef" />
</template>

<script lang="ts" setup>
  import TestTiff from './bali.tif'
  import getTiffBase64 from '@lichang666/tiff'
  const imgRef = ref<HTMLImageElement>()
  onMounted(async () => {
    const imgBase64 = await getTiffBase64(TestTiff)
    imgRef.value.src = imgBase64
  })
</script>
```

<style scoped>
    .img-example{
        margin-top:20px;
        height: 300px;
    }
</style>
