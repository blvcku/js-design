import { GatsbyConfig } from "gatsby";
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `JS Design`,
        siteURL: `https://www.yourdomain.tld`,
        description: `Description`,
        keywords: `key, words`,
        facebook: {
            url: `https://www.facebook.com/jacek.szczypior.77`,
            name: `Jacek Szczypior`,
        },
        instagram: {
            url: `https://www.instagram.com/js_designofficial/`,
            name: `Jacek 004`,
        },
        behance: {
            url: `https://www.behance.net/JSDsg`,
            name: `JSDsgn`,
        },
    },
    graphqlTypegen: true,
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.CONTENTFUL_API_KEY,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                    omitKeys: [
                        "xmlnsDc",
                        "xmlnsCc",
                        "xmlnsRdf",
                        "xmlnsSvg",
                        "xmlnsSodipodi",
                        "xmlnsInkscape",
                    ],
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-anchor-links",
    ],
};

export default config;
