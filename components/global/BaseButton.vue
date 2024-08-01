<script setup lang="ts">
defineProps<{
  content: string,
  target: string,
  secondary?: boolean
}>()
</script>

<template>
    <NuxtLink v-if="!secondary" :href="target" type="button" class="rounded-md bg-primary px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover">
      {{ content }}
    </NuxtLink>
  <NuxtLink v-if="secondary" :href="target" type="button" class="rounded-md border-black bg-white px-3.5 py-2.5 font-semibold text-black shadow-sm hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200">
    {{ content }}
  </NuxtLink>
</template>

<style scoped>

</style>