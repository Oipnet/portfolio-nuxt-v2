<script setup lang="ts">

</script>

<template>
  <div class="nuxt-content">
    <Container>
      <ContentDoc />
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
</style>
