// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/style.css'],

  // Every page is static content, so render them to HTML at build time and
  // let Nitro serve the files directly instead of rendering per request.
  //
  // Every route is listed explicitly rather than left to crawlLinks alone.
  // Crawling only finds a page if some already-crawled page links to it, so a
  // nav rewrite that drops or client-gates a link would silently stop that
  // page from being prerendered -- it would then 404/500 for crawlers while
  // still working for in-app navigation. crawlLinks stays on to catch links
  // added later. failOnError makes a route that cannot render break the build
  // instead of shipping a gap.
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
      routes: [
        '/',
        '/info',
        '/articles',
        '/contact',
        '/events',
        '/upside-of-uncertainty',
        '/earnest-project',
        '/affection-economy',
        '/hope-accelerator'
      ]
    }
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
