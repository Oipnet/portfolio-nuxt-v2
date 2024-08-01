<template>
  <div class="font-roboto bg-white text-black">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  title: 'Forelse - Conception et réalisation d\'application WEB',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ]
})
</script>
