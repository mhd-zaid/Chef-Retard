export default defineNuxtConfig({
  extends: [
    './ui',
    './apps/landing',
    './apps/conseils',
    './apps/contact',
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
    vueI18n: {
      legacy: false,
      locale: 'fr',
      messages: {
        fr: {
          app_name: 'Chef Retard',
          app_description:
        'Découvrez le talent unique du chef, même en cas de retard. Sa cuisine raffinée mérite votre attente. Une expérience culinaire qui vaut chaque minute.',
          menu_home: 'Accueil',
          menu_blog: 'Conseils',
        },
      },
    },
    // vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  devtools: true,
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }

})
