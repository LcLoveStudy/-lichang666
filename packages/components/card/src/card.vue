<template>
  <div class="lc-card" :class="[`lc-card-shadow-${props.shadow}`]">
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  const props = defineProps({
    shadow: {
      type: String as PropType<'always' | 'hover' | 'never'>,
      default: 'always'
    }
  })
</script>
