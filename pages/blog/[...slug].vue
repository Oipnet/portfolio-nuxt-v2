<script setup lang="ts">
import fr from 'date-fns/locale/fr';
import {format} from "date-fns";
import {useJsonMetadata} from "~/composables/seo/useJsonMetadata";
import type Frontmatter from "~/interfaces/frontmatter";
import {useMeta} from "~/composables/seo/useMeta";
import {useLinks} from "~/composables/seo/useLinks";
import {useShowArticle} from "~/composables/blog/useShowArticle";

const route = useRoute();
const config = useRuntimeConfig();

const {data: page} = await useShowArticle(route.params.slug.join('/'))
const frontmatter: Frontmatter = {
  published: new Date(page?.value?.published) || new Date(),
  cover: page?.value?.cover || '',
  title: page?.value?.title || '',
  author: page?.value?.author || '',
  description: page?.value?.description || '',
  keywords: page?.value?.keywords.split(',') || [],
  url: route.fullPath,
  baseUrl: config.public.baseUrl || ''
} || {}

useContentHead(page)

useHead({
  meta: useMeta(frontmatter),
  link: useLinks(frontmatter),
  script: [
    useJsonMetadata(frontmatter),
    {
      type: "text/javascript",
      innerHTML: `
      (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://forelse-fr.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();`
    }
  ]
})
</script>

<template>
  <div class="nuxt-content">
    <Container>
      <BaseTitle :title="frontmatter.title"
                 :subTitle="`Publié le ${format(frontmatter.published, 'dd MMM yyyy', { locale: fr })} par ${frontmatter.author}`"/>
      <NuxtPicture format="webp" :src="frontmatter.cover" :alt="frontmatter.title" class="mr-8 col-span-1 w-full"
                   :img-attrs="{ class: 'h-[350px] mx-auto'}"/>
      <div class="mt-8 leading-relaxed">
        <ContentRenderer :value="page"/>
      </div>
      <div id="disqus_thread"></div>
    </Container>
  </div>
  <NuxtPicture format="webp" src="/img/logo-800.png" alt="Forelse" class="header--logo mr-8 col-span-1 w-full"
               :img-attrs="{ class: 'h-[350px] mx-auto'}"/>
</template>

<style>
.nuxt-content {
  @apply max-w-[1248px] mx-auto my-10 p-8;
}

.nuxt-content h1 {
  @apply text-4xl font-title text-primary mt-10 mb-2;
}

.nuxt-content h2 {
  @apply font-sub-title mb-8;
}

.nuxt-content p {
  @apply mb-4;
}

.nuxt-content code {
  @apply block m-4 bg-gray-100 p-4 rounded-xl;
}

.nuxt-content strong {
  @apply font-bold;
}

.nuxt-content table {
  @apply w-full mb-4;
}

.nuxt-content table th {
  @apply text-left font-bold p-4;
}

.nuxt-content table tr {
  @apply border-b border-gray-200;
}

.nuxt-content table td {
  @apply p-4;
}
</style>
