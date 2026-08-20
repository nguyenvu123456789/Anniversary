<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps<{ icon: string; title: string; desc: string; index: number }>()
const visible = ref(false)
const hovered = ref(false)
const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!root.value) return
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      observer?.disconnect()
    }
  }, { threshold: 0.2 })
  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <article
    ref="root"
    class="promise-card"
    :class="{ visible, hovered }"
    :style="{ '--delay': `${index * 0.15}s` }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="promise-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </article>
</template>
