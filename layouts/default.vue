<script setup lang="ts">

</script>

<template>
  <Navbar />
  <slot />
  <footer class="bg-primary-hover min-h-64 flex flex-row pt-8 text-white text-sm">
    <div class="w-1/3 px-4">
      <h3 class="text-2xl font-title mb-4">Navigation</h3>
      <ul>
        <li class="mb-2">
          <nuxt-link to="/">Accueil</nuxt-link>
        </li>
        <li class="mb-2">
          <nuxt-link to="/contact">Me contacter</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="w-1/3"></div>
    <div class="w-1/3"></div>
  </footer>
</template>

<style scoped>

</style>
