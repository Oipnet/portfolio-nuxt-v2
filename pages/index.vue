<template>
  <Header/>
  <Container>
    <div class="max-w-2xl mx-auto my-10 p-8">
      <BaseTitle title="A propos de moi" sub-title="Prenez le temps de me connaitre"/>
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
  </Container>
  <div class="h-auto pt-8 pb-8 md:h-36 bg-primary-hover text-white flex flex-col md:flex-row justify-center md:justify-end items-center md:pr-32 text-5xl font-title gap-12">
    <p class="text-center md:text-right">Prenons le temps de se connaitre</p>
    <BaseButton content="Me contacter" target="/contact" secondary/>
  </div>
  <Container>
    <Services/>
  </Container>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import Container from "~/components/global/Container.vue";
import Services from "~/components/Services.vue";
</script>