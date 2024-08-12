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
  <me-contacter />
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
</script>
