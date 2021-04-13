export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'quwi-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/main.css',
    '~/assets/style/reset.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  router: {
  },
  axios: {
    baseURL: 'https://api.quwi.com/v2'
  },
  auth: {
    strategies: {
      local: {
        // token: {
        //   property: 'token',
          // required: false,
          // type: false
        // },
        // user: {
        //   property: 'user',
        //   autoFetch: false
        // },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/users/profile', method: 'get' },
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/home',
      callback: '/'
    },
    watchLoggedIn: true,
    rewriteRedirects: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
