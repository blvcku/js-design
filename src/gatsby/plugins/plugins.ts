import type { GatsbyConfig } from 'gatsby';
import gatsbySourceContentful from './plugins-configs/gatsby-source-contentful.config';
import gatsbySourceFilesystem from './plugins-configs/gatsby-source-filesystem.config';
import gatsbyPluginReactSvg from './plugins-configs/gatsby-plugin-react-svg.config';
import gatsbyPluginSharp from './plugins-configs/gatsby-plugin-sharp.config';
import gatsbyPluginSitemap from './plugins-configs/gatsby-plugin-sitemap.config';
import gatsbyPluginRobotsTxt from './plugins-configs/gatsby-plugin-robots-txt';
import gatsbyOmniFontLoader from './plugins-configs/gatsby-omni-font-loader';
import gatsbyPluginManifest from './plugins-configs/gatsby-plugin-manifest';

const plugins: GatsbyConfig['plugins'] = [
    gatsbySourceContentful,
    gatsbyPluginSitemap,
    gatsbyPluginRobotsTxt,
    gatsbySourceFilesystem,
    gatsbyPluginReactSvg,
    gatsbyPluginSharp,
    gatsbyOmniFontLoader,
    gatsbyPluginManifest,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
];

export default plugins;
