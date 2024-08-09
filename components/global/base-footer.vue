<script setup lang="ts">
// const { data: articles } = await useAsyncData('liste', () => queryContent('/blog').where({published: {$lt: new Date()}}).find());
import {useListArticles} from "~/composables/blog/useListArticles";

const { data: articles } = await useListArticles(3)
</script>

<template>
  <footer class="bg-primary min-h-64 pt-8 text-white text-sm">
    <div class="container mx-auto flex flex-col md:flex-row justify-center text-center md:text-left">
      <div class="w-full md:w-1/3 py-4 md:px-4">
        <h3 class="text-2xl font-title mb-4">Navigation</h3>
        <ul>
          <li class="mb-2">
            <nuxt-link to="/">Accueil</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/contact">Me contacter</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/3 py-4 md:px-4">
        <h3 class="text-2xl font-title mb-4">Blog</h3>
        <ul v-for="article in articles">
          <li class="mb-2">
            <nuxt-link :to="article._path">{{ article.title }}</nuxt-link>
          </li>
        </ul>

      </div>
      <div class="w-1/3">
        <h3 class="text-2xl font-title mb-4">Contact</h3>
        <nuxt-link to="https://calendly.com/forelse/discutons-de-votre-projet" target="_blank">Prendre un rendez-vous</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
