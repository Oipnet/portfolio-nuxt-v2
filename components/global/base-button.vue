<script setup lang="ts">
defineProps<{
  content: string,
  href: string,
  target: string,
  secondary?: boolean
}>()
</script>

<template>
  <NuxtLink v-if="!secondary" :href="href" type="button" :target="target"
            class="rounded-md bg-primary mr-2 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover">
    {{ content }}
  </NuxtLink>
  <NuxtLink v-if="secondary" :href="href" type="button" :target="target"
            class="rounded-md border-black mr-2 bg-secondary px-3.5 py-2.5 font-semibold text-black hover:text-white shadow-sm hover:bg-secondary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200">
    {{ content }}
  </NuxtLink>
</template>

<style scoped>

</style>
