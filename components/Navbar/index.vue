<template>
  <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
    <NuxtLink class="text-3xl font-bold leading-none" href="/">
      <NuxtPicture format="webp" src="/img/text-logo.png" alt="Forelse" :img-attrs="{ class: 'h-10' }"/>
    </NuxtLink>
    <div class="lg:hidden">
      <button class="navbar-burger flex items-center text-blue-600 p-3" aria-label="Ouvrir le menu" aria-controls="navbar-menu" :aria-expanded="menuOpen" @click.prevent="handleToggleNavbar">
        <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
      <Item v-for="item in items" :name="item.name" :url="item.url" />
    </ul>
  </nav>
  <div id="navbar-menu" class="navbar-menu relative z-50" :class="{ hidden: !menuOpen }">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" @click.prevent="handleToggleNavbar"></div>
    <nav class="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
      <div class="flex items-center mb-8">
        <NuxtLink class="mr-auto text-3xl font-bold leading-none" to="/" @click="handleToggleNavbar(100)">
          <NuxtPicture format="webp" src="/img/text-logo.png" alt="Forelse - accueil" :img-attrs="{ class: 'h-10' }"/>
        </NuxtLink>
        <button class="navbar-close" aria-label="Fermer le menu" @click.prevent="handleToggleNavbar">
          <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1" v-for="item in items">
            <NuxtLink class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded uppercase" :to="item.url" @click="handleToggleNavbar(100)">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <p class="my-4 text-xs text-center text-gray-400">
          <span>Copyright © {{ new Date().getFullYear() }}</span>
        </p>
      </div>
    </nav>
  </div>
</template>

<script setup>

import Item from "~/components/Navbar/Item.vue";
import {useNavbarItems} from "~/composables/useNavbarItems.ts";

const items = useNavbarItems();

const menuOpen = ref(false);

function handleToggleNavbar(delay = 0) {
  setTimeout(() => {
    menuOpen.value = !menuOpen.value;
  }, typeof delay === 'number' ? delay : 0)
}
</script>
