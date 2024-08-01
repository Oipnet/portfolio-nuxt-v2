<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.params.slug.join('_'), queryContent(`/blog/${route.params.slug.join('/')}`).findOne)
const frontmatter = {
  published: page?.value?.published || false,
  cover: page?.value?.cover || '',
  title: page?.value?.title || '',
} || {}

console.log(page, frontmatter)
</script>

<template>
  <div class="nuxt-content">
    <Container>
      <BaseTitle :title="frontmatter.title" :subTitle="frontmatter.published ? 'Publié le WIP par WIP' : ''"/>
      <NuxtPicture format="webp" :src="frontmatter.cover" :alt="frontmatter.title" class="mr-8 col-span-1 w-full"
                   :img-attrs="{ class: 'h-[350px] mx-auto'}"/>
      <div class="mt-8 leading-relaxed">
        <ContentRenderer :value="page" />
      </div>
    </Container>
  </div>
  <NuxtPicture format="webp" src="/img/logo-800.png" alt="Forelse" class="header--logo mr-8 col-span-1 w-full"
               :img-attrs="{ class: 'h-[350px] mx-auto'}"/>
</template>

<style>
  .nuxt-content h1 {
    @apply text-4xl font-title text-primary mt-10 ml-24 mb-2;
  }
  .nuxt-content h2 {
    @apply font-sub-title ml-24 mb-8;
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
