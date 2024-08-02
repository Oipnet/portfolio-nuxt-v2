<script setup lang="ts">

import BaseButton from "~/components/global/base-button.vue";
</script>

<template>
  <header class="header grid grid-cols-1 md:grid-cols-header w-full mt-8 items-center gap-8">
    <div class="header--title text-right pr-16">
      <h1 class="text-6xl text-primary font-title uppercase">Forelse</h1>
      <h2 class="text-black text-2xl mt-4 font-sub-title">Conception et réalisation d'application WEB</h2>
      <div class="header--title-cta mt-16">
        <base-button content="Me contacter" target="/contact"/>
      </div>
    </div>
    <NuxtPicture format="webp" src="/img/logo-800.png" alt="Forelse" class="header--logo mr-8 col-span-1 w-full" :img-attrs="{ class: 'h-[350px] mx-auto'}"/>
  </header>
  <div class="h-1 mt-8 bg-primary-hover mx-8"></div>
</template>

<style scoped>

</style>
