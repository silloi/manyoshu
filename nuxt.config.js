import theme from '@nuxt/content-theme-docs'

export default theme({

  loading: { color: '#48bb78' },
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },
  i18n: {
    locales: () => [{
      code: 'ja',
      iso: 'ja_JP',
      file: 'ja_JP.js',
      name: '日本語'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'ja'
  },
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'manyoshu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    ['@nuxt/typescript-build', {
      typeCheck: false
    }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */
    standalone: true,
  },
  // buildModules: [
  //   ['@nuxtjs/google-analytics', {
  //     id: 'UA-12301-2'
  //   }]
  // ]
})

// export default {
//   // Global page headers (https://go.nuxtjs.dev/config-head)
//   head: {
//     title: 'manyoshu',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },

//   // Global CSS (https://go.nuxtjs.dev/config-css)
//   css: [
//   ],

//   // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
//   plugins: [
//   ],

//   // Auto import components (https://go.nuxtjs.dev/config-components)
//   components: true,

//   // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
//   buildModules: [
//     // https://go.nuxtjs.dev/typescript
//     '@nuxt/typescript-build',
//   ],

//   // Modules (https://go.nuxtjs.dev/config-modules)
//   modules: [
//     // https://go.nuxtjs.dev/content
//     '@nuxt/content',
//   ],

//   // Content module configuration (https://go.nuxtjs.dev/config-content)
//   content: {},

//   // Build Configuration (https://go.nuxtjs.dev/config-build)
//   build: {
//   }
// }
