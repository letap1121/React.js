module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
    /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS Weather App",
        short_name: "weather-app",
        start_url: "/",
        background_color: "#4CAF50",
        theme_color: "#4CAF50",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "./static/favicon.ico", // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '504b868212eef251b7a3a88708220b57',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },

    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '88c2495035582f4af23f687e0f8ece07',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    },

  ]
}