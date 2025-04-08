<template>
  <div class="playground">
    <el-upload action="#" :auto-upload="false" :on-change="fileChange">
      <el-button type="primary">Click to upload</el-button>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { fileToBase64 } from '@lichang666/utils'
import { type UploadFile, ElUpload } from 'element-plus'
const fileChange = async (uploadFile: UploadFile) => {
  if (uploadFile?.raw) {
    const base = await fileToBase64(uploadFile.raw)
    console.log(base)
  }
}
</script>

<style scoped>
.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>
