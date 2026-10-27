<script setup lang="ts">

import {format} from "date-fns";
import fr from 'date-fns/locale/fr';

const props = defineProps<{
  testimonials: any
}>()
</script>

<template>
  <base-title level="h2" title="Témoignages" />
  <div class="mt-8 max-w-[1024px] mx-auto">
    <Carousel :items-to-show="1" :wrap-around="true" :transition="800">
      <Slide v-for="testimonial in testimonials.data.value" :key="testimonial._path">
        <section class="flex flex-column flex-wrap">
          <div class="w-full mb-8">
            <h3 class="font-title text-primary">{{ testimonial.author }}</h3>
            <p class="text-xs font-sub-title">Le {{ format(testimonial.date, 'dd MMMM yyyy', { locale: fr }) }}</p>
          </div>
          <div class="w-full">
            <ContentRendererMarkdown :value="testimonial" />
          </div>
        </section>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>

</style>
