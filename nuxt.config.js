const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://hogehoge.com'
    : 'https://dev.hogehoge.com'
const apiBase = baseUrl + '/api/v1'

export default {
  mode: 'spa',
  srcDir: 'src/',

  /*
   ** Server config
   */
  server: {
    host: '0.0.0.0'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Page Title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      }
    ],
    link: []
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-fontawesome'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // FIXME:
    baseURL: apiBase,
    browserBaseURL: apiBase
  },

  /*
   ** FontAwesome module configuration
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      // Extend only webpack config for client-bundle
      if (ctx.isDev && ctx.isClient) {
        config.devtool = '#source-map'
        config.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  env: {
    baseUrl: apiBase
  }
}
