import siteMetadata from '../../../gatsby/siteMetadata';

const gatsbyPluginManifest = {
    resolve: `gatsby-plugin-manifest`,
    options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        description: siteMetadata.description,
        start_url: `/`,
        lang: `en`,
        display: `standalone`,
        background_color: `#EBF2F2`,
        theme_color: `#EBF2F2`,
        theme_color_in_head: false,
        icon: `src/assets/favicon.jpg`,
    },
};

export default gatsbyPluginManifest;
