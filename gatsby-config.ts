import type { GatsbyConfig } from 'gatsby';
// Do not use prefix paths here because plugin responsible for this is initialized in gatsby-node(later in build process)
// Check for reference: https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/
import siteMetadata from './src/gatsby/siteMetadata';
import plugins from './src/gatsby/plugins/plugins';

const config: GatsbyConfig = {
    siteMetadata,
    plugins,
    jsxRuntime: `automatic`,
    graphqlTypegen: {
        typesOutputPath: `./src/__generated__/gatsby-types.d.ts`,
        documentSearchPaths: [`./src/gatsby`],
    },
};

export default config;
