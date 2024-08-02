<script setup lang="ts">
defineProps<{
  name: string,
  url: string
}>()
</script>

<template>
  <li><NuxtLink class="text-sm hover:text-gray-500 uppercase" :to="url">{{ name}}</NuxtLink></li>
</template>

<style scoped>

</style>
