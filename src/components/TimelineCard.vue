<script setup lang="ts">
import { ref } from 'vue'

export interface Moment {
  date: string
  title: string
  desc: string
  icon: string
  img: string
  alt: string
}

defineProps<{ moment: Moment }>()
const hovered = ref(false)
</script>

<template>
  <article
    class="timeline-card"
    :class="{ hovered }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="timeline-card-image">
      <img :src="moment.img" :alt="moment.alt" />
      <div class="image-gradient" />
      <span class="date-badge">{{ moment.date }}</span>
    </div>
    <div class="timeline-card-body">
      <h3>{{ moment.title }}</h3>
      <p>{{ moment.desc }}</p>
    </div>
  </article>
</template>
