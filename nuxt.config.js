module.exports = {
  server: {
    port: 5001,
    host: "0.0.0.0"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "project",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      }
    ],
    script: [{
      src: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: [{
      src: "~/plugins/slider.js",
      mode: "client"
    },
    {
      src: "~/plugins/modal.js",
      mode: "client"
    },
    {
      src: "~/plugins/inputmask.js",
      mode: "client"
    },
    {
      src: "~/plugins/map.js",
      mode: "client"
    },
    {
      src: "~/plugins/vueCarousel.js",
      mode: "client"
    },
    {
      src: "~/plugins/filters.js",
      mode: "client"
    },
    {
      src: "~/plugins/calendar.js",
      mode: "client"
    }
  ],
  modules: ["cookie-universal-nuxt"],
  css: [
    "~assets/css/style.css",
    "~assets/css/modals.css",
    "~assets/css/responsive.css"
  ],
  env: {
    apiUrl: "https://api-notary-lk.sevenreasons.ru/"
  }
};
