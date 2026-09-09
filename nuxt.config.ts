// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/style.css'],

  // Every page is static content, so render them to HTML at build time and
  // let Nitro serve the files directly instead of rendering per request.
  nitro: {
    prerender: { crawlLinks: true, routes: ['/'] }
  },

  app: {
    head: {
      link: [
        // Warm up the font origins before the CSS asks for them.
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Only the three families the stylesheet actually uses, upright only.
        // Arimo and Inter are variable; Spectral ships one file per weight.
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Arimo:wght@400..700&family=Inter:wght@400..700&family=Spectral:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
