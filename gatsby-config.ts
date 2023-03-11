import { GatsbyConfig } from 'gatsby';
import siteMetadata from './src/config/siteMetadata.config';
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: siteMetadata,
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
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
                        'xmlnsDc',
                        'xmlnsCc',
                        'xmlnsRdf',
                        'xmlnsSvg',
                        'xmlnsSodipodi',
                        'xmlnsInkscape',
                    ],
                },
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-anchor-links',
    ],
};

export default config;
