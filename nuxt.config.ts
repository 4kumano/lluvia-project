// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Mendaftarkan modul esensial
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/motion/nuxt'
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
