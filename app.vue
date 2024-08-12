<template>
  <div class="font-roboto bg-white text-black">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {useCanonicalUrl} from "~/composables/seo/useCanonicalUrl";

const route = useRoute()
const canonical = useCanonicalUrl(route.path);

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
    },
    {
      rel: 'canonical',
      href: canonical,
    },

  ]
})
</script>
