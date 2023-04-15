// Do not use prefix paths here because plugin responsible for this is initialized in this file(onCreateWebpackConfig)
export { default as onCreateWebpackConfig } from './src/gatsby/onCreateWebpackConfig';
export { default as createSchemaCustomization } from './src/gatsby/create-schema-customization/createSchemaCustomiaztion';
export { default as createPages } from './src/gatsby/createPages';
