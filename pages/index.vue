<template>
  <Header/>
  <container>
    <div class="max-w-2xl mx-auto my-10 p-8">
      <base-title title="A propos de moi" sub-title="Prenez le temps de me connaitre"/>
      <p class="text-gray-700 text-lg mb-6 leading-relaxed">
        Salut! Je suis un développeur web freelance basé près de Bordeaux, spécialisé en PHP et Symfony. Passionné par
        le web et toujours curieux des nouvelles technologies, j'adore créer des applications qui répondent parfaitement
        à vos besoins.
      </p>
      <p class="text-gray-700 text-lg mb-6 leading-relaxed">
        Avec plusieurs années d'expérience à mon actif, je vous accompagne dans tous vos projets, qu'il s'agisse de
        développer un site web, une application sur mesure ou d'optimiser vos systèmes existants.
      </p>
      <p class="text-gray-700 text-lg leading-relaxed">
        Ensemble, on peut transformer vos idées en solutions digitales performantes et innovantes. Travaillons ensemble
        pour donner vie à vos projets!
      </p>
    </div>
  </container>
  <div class="h-auto pt-8 pb-8 md:h-36 bg-primary text-white flex flex-col md:flex-row justify-center md:justify-end items-center md:pr-32 text-5xl font-title gap-12">
    <p class="text-center md:text-right">Prenons le temps de se connaitre</p>
    <base-button content="Me contacter" href="/contact" secondary/>
  </div>
  <container>
    <services-list :services="services.data"/>
  </container>
  <container>
    <Testimonials :testimonials="testimonials"/>
  </container>
</template>
<script setup lang="ts">
import {useListTestimonials} from "~/composables/testimonials/useListTestimonials";
import {useListServices} from "~/composables/services/useListServices";

const testimonials = await useListTestimonials();
const services = await useListServices(3)

console.log(services)
</script>
