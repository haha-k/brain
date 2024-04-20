// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    "@nuxt/ui",
    '@element-plus/nuxt',
    // '@ant-design-vue/nuxt'
  ],
  colorMode: {
    preference: 'light'
  },
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
  },
  vite: {
    optimizeDeps: {
      include: ['dayjs', 'dayjs/plugin/*']
    }
  }
})