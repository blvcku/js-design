import type { GatsbyConfig } from 'gatsby';
import siteMetadata from './src/config/siteMetadata.config';
import path from 'path';
require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata,
    jsxRuntime: `automatic`,
    graphqlTypegen: {
        typesOutputPath: `./src/__generated__/gatsby-types.d.ts`,
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                accessToken: process.env.CONTENTFUL_API_KEY,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src/assets/images/`),
            },
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                    omitKeys: [
                        `xmlnsDc`,
                        `xmlnsCc`,
                        `xmlnsRd`,
                        `xmlnsSvg`,
                        `xmlnsSodipodi`,
                        `xmlnsInkscape`,
                    ],
                },
            },
        },
        {
            resolve: `gatsby-plugin-anchor-links`,
            options: {
                offset: -100,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
    ],
};

export default config;
