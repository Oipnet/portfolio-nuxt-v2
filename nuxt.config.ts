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
    "@nuxt/content",
    "vue3-carousel-nuxt",
    "nuxt-vercel-analytics"
  ],
  plugins: [
    '~/plugins/disqus'
  ],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },

  runtimeConfig: {
    apiUrl: process.env.API_URL,
    public: {
      baseUrl: process.env.PUBLIC_BASE_URL || 'http://localhost:3000',
    },
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: "one-dark-pro",
      },
      langs: ['php', 'shell']
    },
  },
  site: {
    url: 'https://forelse.fr',
    name: 'Forelse',
    cacheMaxAgeSeconds: 3600,
  }
})