module.exports = {
  siteMetadata: {
    title: 'Straylight Systems',
    description: 'The official website of the Straylight.',
    siteUrl: 'https://straylight.systems/',
    author: 'Straylight Command',
    twitter: '',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Straylight Systems',
        short_name: 'Straylight',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#c5ae87',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://api.straylight.systems`,
        contentApiKey: `f60a218f1f09f209f726c0ab93`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
