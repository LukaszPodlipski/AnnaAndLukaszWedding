// https://nuxt.com/docs/api/configuration/nuxt-config
import Tailwind from '@tailwindcss/vite';
import path from 'path';

export default defineNuxtConfig({
  modules: [
    '@vee-validate/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
    'nuxt-viewport',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          href: 'https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/scss/main.scss', '~/assets/css/tailwind.css'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [Tailwind()],
  },

  image: {
    dir: 'assets/images',
  },

  veeValidate: {
    autoImports: true,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },

  typescript: {
    typeCheck: true,
  },

  alias: {
    '@': path.resolve(__dirname, './'),
  },

  i18n: {
    lazy: false,
    /* when 'lazy: true' I get the render mismatch error when passing params to the translation key */
    defaultLocale: 'pl',
    vueI18n: './nuxt.i18n.config.ts',
    langDir: './locales',
    restructureDir: '',
    strategy: 'no_prefix',
    compilation: {
      /* Allow HTML in messages */
      strictMessage: false,
      /* */
    },
    locales: [
      {
        code: 'pl',
        name: 'Polish',
        file: 'pl.json',
      },
    ],
  },

  icon: {
    class: 'local-icon',
    mode: 'svg', // default <Icon> mode applied
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons',
        normalizeIconName: false, // Allows any casing for the icon name, not just kebab-case

        // provider: 'server', // This is needed if ssr: false

        /*
        IMPORTANT NOTE:
        SVG icons should have stroke/fill set to currentColor to work with the icon component.
        */
      },
    ],
  }, // https://nuxt.com/modules/icon

  primevue: {
    options: {
      theme: 'none',
    },
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    fallbackBreakpoint: 'lg',
  }, // https://nuxt.com/modules/nuxt-viewport
});
