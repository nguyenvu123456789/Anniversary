<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ url: string; alt: string; tall: boolean; index: number }>()
const hovered = ref(false)
</script>

<template>
  <div
    class="gallery-image"
    :class="{ tall, hovered }"
    :style="{ '--index': index }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <img :src="url" :alt="alt" />
    <div class="gallery-overlay" />
  </div>
</template>
