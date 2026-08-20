<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TimelineCard, { type Moment } from './TimelineCard.vue'

defineProps<{ moment: Moment; index: number; last: boolean }>()
const visible = ref(false)
const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!root.value) return
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      observer?.disconnect()
    }
  }, { threshold: 0.15 })
  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="root" class="timeline-item" :class="{ visible }" :style="{ '--delay': `${index * 0.1}s` }">
    <div class="timeline-desktop">
      <div class="timeline-side left">
        <TimelineCard v-if="index % 2 === 0" :moment="moment" />
      </div>
      <div class="timeline-center">
        <div class="timeline-dot">{{ moment.icon }}</div>
      </div>
      <div class="timeline-side right">
        <TimelineCard v-if="index % 2 !== 0" :moment="moment" />
      </div>
    </div>

    <div class="timeline-mobile">
      <div class="mobile-rail">
        <div class="timeline-dot">{{ moment.icon }}</div>
        <div v-if="!last" class="mobile-line" />
      </div>
      <div class="mobile-card"><TimelineCard :moment="moment" /></div>
    </div>
  </div>
</template>
