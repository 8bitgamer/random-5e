module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dnd',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { 
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto',
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya+SC'
     }
    ]
  },  
  css: [
    'assets/styles/material.css',
    'vue-material/dist/vue-material.min.css'
  ],
  plugins: ['@/plugins/material-ui'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    'nuxt-material-design-icons',
    '@nuxtjs/axios'
  ],

  axios: {

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      };
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

