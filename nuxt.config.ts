// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-booster",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@formkit/nuxt",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "@tailvue/nuxt",
    "@nuxt/content"
  ],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },

  runtimeConfig: {
    apiUrl: process.env.API_URL
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: "one-dark-pro",
      },
      langs: ['php', 'shell']
    }
  }
})
