import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const plugins = (
    CONTENTFUL_API_KEY: string | undefined,
    CONTENTFUL_SPACE_ID: string | undefined,
): GatsbyConfig['plugins'] => [
    {
        resolve: `gatsby-source-contentful`,
        options: {
            accessToken: CONTENTFUL_API_KEY,
            spaceId: CONTENTFUL_SPACE_ID,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: path.join(__dirname, `../assets/images/`),
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
];

export default plugins;
