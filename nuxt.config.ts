// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Favicon & meta head
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
      ]
    }
  },

  // Mendaftarkan modul esensial
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    'nuxt-swiper'
  ],

  // Konfigurasi Nuxt Image
  image: {
    format: ['webp', 'avif', 'jpeg', 'png'],
    quality: 80,
  },

  // Deploy ke Vercel
  nitro: {
    preset: 'vercel'
  }
})
