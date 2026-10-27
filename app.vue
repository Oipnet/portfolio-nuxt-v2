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
  titleTemplate: (title) => title && !title.includes('Forelse') ? `${title} - Forelse` : title,
  title: 'Forelse - Conception et réalisation d\'application WEB',
  meta: [
    {
      name: 'description',
      content: 'Forelse, développeur PHP / Symfony freelance près de Bordeaux : architecture logicielle, audit de code et maintenance de vos applications web.'
    }
  ],
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
