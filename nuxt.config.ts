//nuxt.config.js (or) nuxt.config.ts

export default defineNuxtConfig({
  modules: ['@pinegrow/nuxt-module', 'nuxt-icon', '@nuxt/devtools'],
  pinegrow: {
    liveDesigner: {
      devtoolsKey: 'devtools',
      tailwindcss: {
        configPath: 'tailwind.config.cjs',
        cssPath: '@/assets/css/tailwind.css',
        restartOnConfigUpdate: true,
        restartOnThemeUpdate: false,
      },
    },
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
