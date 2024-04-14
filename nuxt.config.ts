// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    "@nuxt/ui"
  ],
  app: {
    head: {
      charset: 'utf-8',
      title: 'brain-你的AI大脑',
      viewport: 'width=device-width, initial-scale=1',
      link: [{
        rel: 'icon',
        type: "image/png",
        href: '/logo.png'
      }]
    },
  }
})