import type { GatsbyConfig } from 'gatsby';
// Do not use prefix paths here because plugin responsible for this is initialized later
// Check for reference: https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/
import siteMetadata from './src/gatsby/siteMetadata';
import plugins from './src/gatsby/plugins';
import dotenv from 'dotenv';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata,
    plugins: plugins(
        process.env.CONTENTFUL_API_KEY,
        process.env.CONTENTFUL_SPACE_ID,
    ),
    jsxRuntime: `automatic`,
    graphqlTypegen: {
        typesOutputPath: `./src/__generated__/gatsby-types.d.ts`,
    },
};

export default config;
