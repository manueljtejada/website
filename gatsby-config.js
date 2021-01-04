module.exports = {
  siteMetadata: {
    title: "Manuel J. Tejada",
    description: "FullStack Developer based in Stockholm.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-98482386-1",
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "manueljtejada",
        accessToken:
          "MC5YLTJyYWhBQUFDUUFrdFg0.ZO-_ve-_vSbvv70QciUl77-9QR5XL--_vTXvv71NFO-_vWXvv73vv73vv70YU--_ve-_ve-_ve-_ve-_ve-_vQ",
        schemas: {
          blog_post: require("./src/schemas/blog_post.json"),
          project: require("./src/schemas/project.json"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
