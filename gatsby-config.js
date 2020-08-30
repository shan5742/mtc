module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`700`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
