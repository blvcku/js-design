import siteMetadata from '../../../gatsby/siteMetadata';
import colors from '../../../styles/colors';

const gatsbyPluginManifest = {
    resolve: `gatsby-plugin-manifest`,
    options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        description: siteMetadata.description,
        start_url: `/`,
        lang: `en`,
        display: `standalone`,
        background_color: colors.primary[200],
        theme_color: colors.primary[200],
        theme_color_in_head: false,
        icon: `src/assets/favicon.jpg`,
    },
};

export default gatsbyPluginManifest;
