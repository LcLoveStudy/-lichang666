<template>
  <div class="playground">
    <lc-card class="my-card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos qui sunt exercitationem
      dolorum possimus iusto labore, consectetur ipsum accusantium quaerat minima repellat
      reprehenderit aut at totam consequuntur autem delectus.
    </lc-card>
  </div>
</template>

<script setup lang="ts">
import { LcCard } from '@lichang666/lc-design-vue'
</script>

<style scoped>
.playground {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
}
.my-card {
  width: 20rem;
}
</style>
