<template>
  <Container>
    <BaseTitle title="Me contacter" />
    <div class="min-h-[420px] mx-4 md:mx-auto">
      <ClientOnly>
          <Contact />
      </ClientOnly>
    </div>
  </Container>
  <NuxtPicture format="webp" src="/img/logo-800.png" alt="Forelse" class="header--logo mr-8 col-span-1 w-full"
               :img-attrs="{ class: 'h-[350px] mx-auto'}"/>
</template>
<script setup lang="ts">
import Contact from "~/components/Form/contact.vue";

useSeoMeta({
  title: 'Me contacter',
  description: 'Contactez Forelse, développeur PHP / Symfony freelance près de Bordeaux, pour un devis, un audit de code ou la maintenance de votre application.',
})
</script>
