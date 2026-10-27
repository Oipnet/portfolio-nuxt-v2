<script setup lang="ts">

defineProps<{
  title: string,
  subTitle?: string,
  // Une seule balise h1 par page : les titres de section passent level="h2"
  level?: 'h1' | 'h2',
}>()
</script>

<template>
  <div class="mb-5">
    <component :is="level ?? 'h1'" class="text-4xl font-title text-primary mt-10 ml-24">{{ title }}</component>
    <p v-if="subTitle" class="font-sub-title ml-24 text-primary-dark">{{ subTitle }}</p>
  </div>
</template>

<style scoped>

</style>