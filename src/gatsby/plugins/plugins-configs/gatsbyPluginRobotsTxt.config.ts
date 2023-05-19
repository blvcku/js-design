import siteMetadata from '../../siteMetadata';

const gatsbyPluginRobotsTxt = {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
    },
};

export default gatsbyPluginRobotsTxt;
