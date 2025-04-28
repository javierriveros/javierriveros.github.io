module.exports = {
  siteMetadata: {
    title: "Javier Riveros",
    description: "Software Engineer from Colombia 🇨🇴. I solve complex problems through technology. With 4+ years of experience, I've built systems that scale, led technical initiatives, and helped teams grow through mentorship.",
    author: "@javierriveros",
    siteUrl: "https://javierriveros.github.io",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Javier Riveros - Software Engineer",
        short_name: "Javier Riveros",
        start_url: "/",
        background_color: "#0f172a",
        theme_color: "#0f172a",
        display: "standalone",
        icon: "src/images/logo.png",
        icons: [
          {
            src: "src/images/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/images/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "National+Park:wght@200..800&display=swap"
        ],
        display: "swap"
      }
    },
    "gatsby-plugin-sitemap",
  ],
}
