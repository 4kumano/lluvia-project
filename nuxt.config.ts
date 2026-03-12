// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      googleSheetId: '', // Set via NUXT_PUBLIC_GOOGLE_SHEET_ID env var
    }
  },

  // Favicon & meta head
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'light'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
      ]
    }
  },

  // Tailwind configuration
  tailwindcss: {
    config: {
      darkMode: 'class'
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
    provider: 'vercel',
    format: ['webp', 'avif', 'jpeg', 'png'],
    quality: 80,
  },

  // Deploy ke Vercel
  nitro: {
    preset: 'vercel'
  }
})
