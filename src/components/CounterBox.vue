<script setup lang="ts">
defineProps<{ value: number; label: string }>()
</script>

<template>
  <div class="counter-box">
    <div class="counter-value">{{ String(value).padStart(2, '0') }}</div>
    <div class="counter-label">{{ label }}</div>
  </div>
</template>
