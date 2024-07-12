<template>
  <div class="playground">
    <lc-card class="my-card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos qui sunt exercitationem
      dolorum possimus iusto labore, consectetur ipsum accusantium quaerat minima repellat
      reprehenderit aut at totam consequuntur autem delectus.
    </lc-card>
    <lc-button type="primary">hello world</lc-button>
  </div>
</template>

<script setup lang="ts">
import { LcCard, LcButton } from '@lichang666/lc-design-vue'
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
.my-card {
  width: 20rem;
  margin-bottom: 1rem;
}
</style>
