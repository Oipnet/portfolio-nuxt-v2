<script setup lang="ts">

import {format} from "date-fns";
import fr from 'date-fns/locale/fr';

const props = defineProps<{
  testimonials: any
}>()
</script>

<template>
  <base-title title="Témoignages" />
  <div class="mt-8 max-w-[1024px] mx-auto">
    <Carousel :items-to-show="1" :wrap-around="true" :autoplay="1500" :transition="800" :pause-autoplay-on-hover="true">
      <Slide v-for="testimonial in testimonials.data.value" :key="testimonial._path">
        <section class="flex flex-column flex-wrap">
          <div class="w-full mb-8">
            <h1 class="font-title text-primary">{{ testimonial.author }}</h1>
            <p class="text-xs font-sub-title">Le {{ format(testimonial.date, 'dd MMMM yyyy', { locale: fr }) }}</p>
          </div>
          <div class="w-full">
            <ContentRendererMarkdown :value="testimonial" />
          </div>
        </section>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>

</style>
