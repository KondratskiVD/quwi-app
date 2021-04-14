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
    '~plugins/filters.js',
    '~plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],
  router: {
  },
  axios: {
    baseURL: 'https://api.quwi.com/v2'
  },
  auth: {
    rewriteRedirects: false,
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        _scheme: '~/modules/auth/schemes/fixedLocal.js',
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/users/profile',
            method: 'get'
          },
        },
        tokenRequired: true,
        globalToken: true
      }
    }
  },
  toast: {
    position: 'top-right',
    duration: 3000,
    register: [
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
