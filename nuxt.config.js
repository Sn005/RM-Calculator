const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'RM-Calculator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'RM計算用のWEBアプリケーションです。重量とrepsを入力するだけですぐに各respに対するRMが計算できます。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-125045597-1'
    }]
  ],
  manifest: {
    name: "RM-Calculator",
    lang: 'ja'
  },
  workbox: {
    dev: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      const defaultAlias = config.resolve.alias
      const addAlias = {
        '@components' : path.join(__dirname, 'components'),
        '@organisms' : path.join(__dirname, 'components/organisms'),
        '@atoms' : path.join(__dirname, 'components/atoms')
      }
      config.resolve.alias = Object.assign(defaultAlias, addAlias)
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
