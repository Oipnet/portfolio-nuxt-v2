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
  .nuxt-content h2 {
    @apply font-sub-title ml-8 mb-8 font-bold;
  }

  .nuxt-content p {
    @apply mb-4;
  }
</style>
