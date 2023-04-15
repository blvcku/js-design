import siteMetadata from '../../../gatsby/siteMetadata';

const gatsbyPluginRobotsTxt = {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
    },
};

export default gatsbyPluginRobotsTxt;
