module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "site"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "blogdata",
        fieldName: "blogdata",
        url:
          "https://api-sa-east-1.graphcms.com/v2/ckx7incqf03px01ywh9bgcdec/master"
      }
    }
  ]
};
