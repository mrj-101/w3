// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/istyle.css'],

  app: {
    head: {
      title: 'My Awesome Nuxt App', // Sets the default title
      // You can also define a titleTemplate here for more dynamic global titles
      // titleTemplate: '%s - My App Name',
    }
  },
  
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ]
})