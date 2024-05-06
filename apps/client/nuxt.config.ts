// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['@/assets/common.scss'],
  modules: [
    '@unocss/nuxt',
    "@nuxt/ui", // '@ant-design-vue/nuxt'
    '@element-plus/nuxt',
    "nuxt-tiptap-editor"
  ],
  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },
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
  },
  runtimeConfig: {
    openaiApiKey: "",
    BLOB_READ_WRITE_TOKEN: "",
  },
})