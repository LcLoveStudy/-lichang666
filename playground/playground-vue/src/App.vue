<template>
  <div>1</div>
</template>

<script setup lang="ts">
import { deepClone } from '@lichang666/utils'
import { ref } from 'vue'
/** object test */
const obj = ref({
  a: 1
})
const newObj = deepClone(obj.value)
obj.value.a = 2
console.log(obj.value.a, newObj.a)

/** string test */
const str = ref('1')
const newStr = deepClone(str.value)
str.value = '2'
console.log(str.value, newStr)

/** array test */
const arr = ref([1, 2, 3])
const newArr = deepClone(arr.value)
arr.value[0] = 4
console.log(arr.value[0], newArr[0])

/** date test */
const date = ref(new Date())
const newDate = deepClone(date.value)
</script>

<style scoped></style>
