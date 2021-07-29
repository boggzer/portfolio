module.exports = {
  siteMetadata: {
    title: 'portfolio',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'zfl5tz2d',
        dataset: 'production',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-ts',
      options: {
        // Disable type checking in production
        typeCheck: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        codegen: false,
      },
    },
    'gatsby-plugin-remove-dependency-transpilation',
  ],
};
