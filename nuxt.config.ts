export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },

  modules: ['@nuxthq/studio'],
  compatibilityDate: '2025-01-07'
})