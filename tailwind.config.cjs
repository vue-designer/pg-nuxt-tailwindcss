const { pg_colors, pg_fonts } = require('./themes/pg-tailwindcss-theme.cjs') // tailwind.config.[js,cjs]

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    // used by Vue Designer for live-designing
    './_pginfo/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        ...pg_colors, // ...(pg_colors as any), // tailwind.config.ts
      },
      fontFamily: pg_fonts, // pg_fonts as any, // tailwind.config.ts
    },
  },
  plugins: [],
}
