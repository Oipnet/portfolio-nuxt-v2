<script setup lang="ts">
import { ref, computed } from 'vue';
import {format} from "date-fns";
import {useListArticles} from "~/composables/blog/useListArticles";

const currentPage = ref(1);
const itemsPerPage = 9;

const { data: articles } = await useListArticles(9);

// Pagination logic
const totalPages = computed(() => Math.ceil(articles?.value?.length / itemsPerPage));

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return articles?.value?.slice(start, end);
});
</script>

<template>
  <Container>
    <BaseTitle title="Blog" />
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 max-w-[2048px] mx-4 md:mx-0">
      <div v-for="article in paginatedArticles" :key="article._id" class="article-card">
          <article class="card p-4 h-full grid grid-cols-1">
            <NuxtPicture format="webp" :src="article.cover" :alt="article.title"
                         :img-attrs="{ class: 'w-full h-48 object-contain'}"/>
            <div class="p-4">
              <h1 class="text-xl text-center font-title font-semibold">{{ article.title }}</h1>
              <h2 class="text-xs text-center font-sub-title">Publié le {{ format(article.published, 'dd/MM/yyyy')}} par {{ article.author }}</h2>
            </div>
            <div class="p-4 md:min-h-[150px] xl:min-h-[250px]">
              <ClientOnly>
                <p class="text-sm text-gray-600 mt-4 leading-relaxed">
                  <ContentRendererMarkdown :value="article.excerpt" />
                </p>
              </ClientOnly>
            </div>
            <NuxtLink :href="article._path" class="block mt-8 text-right font-sub-title self-end underline">Lire la suite</NuxtLink>
          </article>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination mt-8 flex justify-center" v-if="totalPages > 1">
      <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 rounded-l">
        Précédent
      </button>
      <span class="px-4 py-2 bg-gray-100">{{ currentPage }} / {{ totalPages }}</span>
      <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-200 rounded-r">
        Suivant
      </button>
    </div>
  </Container>
  <NuxtPicture format="webp" src="/img/logo-800.png" alt="Forelse" class="header--logo mr-8 col-span-1 w-full"
               :img-attrs="{ class: 'h-[350px] mx-auto'}"/>
</template>

<style scoped>
.article-card {
  @apply border rounded-lg shadow hover:shadow-lg transition-shadow duration-300;
}

.article-card img {
  @apply rounded-t-lg;
}

.pagination button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
