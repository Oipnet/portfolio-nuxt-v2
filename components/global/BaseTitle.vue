<script setup lang="ts">

defineProps<{
  title: string,
  subTitle?: string,
}>()
</script>

<template>
  <div class="mb-5">
    <h1 class="text-4xl font-title text-primary mt-10 ml-24">{{ title }}</h1>
    <h2 v-if="subTitle" class="font-sub-title ml-24">{{ subTitle }}</h2>
  </div>
</template>

<style scoped>

</style>