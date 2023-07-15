import type { GatsbyConfig } from 'gatsby';
import gatsbySourceContentful from './plugins-configs/gatsbySourceContentful.config';
import gatsbySourceFilesystem from './plugins-configs/gatsbySourceFilesystem.config';
import gatsbyPluginReactSvg from './plugins-configs/gatsbyPluginReactSvg.config';
import gatsbyPluginSharp from './plugins-configs/gatsbyPluginSharp.config';
import gatsbyPluginSitemap from './plugins-configs/gatsbyPluginSitemap.config';
import gatsbyPluginRobotsTxt from './plugins-configs/gatsbyPluginRobotsTxt.config';
import gatsbyOmniFontLoader from './plugins-configs/gatsbyOmniFontLoader.config';
import gatsbyPluginManifest from './plugins-configs/gatsbyPluginManifest.config';
import gatsbyPluginOffline from './plugins-configs/gatsbyPluginOffline.config';

const plugins: GatsbyConfig['plugins'] = [
    gatsbySourceContentful,
    gatsbyPluginSitemap,
    gatsbyPluginRobotsTxt,
    gatsbySourceFilesystem,
    gatsbyPluginReactSvg,
    gatsbyPluginSharp,
    gatsbyOmniFontLoader,
    gatsbyPluginManifest,
    gatsbyPluginOffline,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
];

export default plugins;
