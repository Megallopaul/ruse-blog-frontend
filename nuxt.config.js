import axios from 'axios'

require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ruse-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts.scss',
    '~/assets/global.scss',
  ],

  styleResources: {
    scss: [
      '~/assets/main.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    async routes() {
      const strapiLoginData = {
        identifier: process.env.STRAPI_AUTH_ID,
        password: process.env.STRAPI_AUTH_PASSWORD
      }

      const { data: loginResponse } = await axios.post(`${process.env.STRAPI_URL}/auth/local`, strapiLoginData)
      const strapiClient = axios.create({
        baseURL: process.env.STRAPI_URL,
        headers: {
          'Authorization': `Bearer ${loginResponse.jwt}`
        }
      })
      const { data: articles } = await strapiClient.get('/articles')
      return articles.data.map(article => '/posts/' + article.attributes.slug)
    }
  }
}
