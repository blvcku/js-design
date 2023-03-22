// Do not use prefix paths here because plugin responsible for this is initialized later
// Check for reference: https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/
import onCreateWebpackConfig from './src/gatsby/onCreateWebpackConfig';
import createSchemaCustomization from './src/gatsby/createSchemaCustomization';

export { onCreateWebpackConfig, createSchemaCustomization };
