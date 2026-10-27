// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Le contenu ne change qu'à chaque déploiement : les pages sont pré-rendues
  // au build et servies depuis le CDN de Vercel au lieu d'être rendues à chaque visite.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      },
    },
  },

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
    "nuxt-vercel-analytics",
    "@nuxthq/studio"
  ],
  plugins: [
    '~/plugins/disqus',
    '~/plugins/navigation'
  ],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },

  runtimeConfig: {
    // Envoi du formulaire de contact (surchargeable via NUXT_SMTP_* / NUXT_CONTACT_*)
    smtp: {
      host: process.env.SMTP_HOST || '',
      port: Number(process.env.SMTP_PORT || 465),
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
    contact: {
      to: process.env.CONTACT_TO || '',
      from: process.env.CONTACT_FROM || '',
    },
    public: {
      baseUrl: process.env.PUBLIC_BASE_URL || 'https://forelse.fr',
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
