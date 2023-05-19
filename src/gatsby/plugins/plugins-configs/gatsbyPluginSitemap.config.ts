import siteMetadata from '../../siteMetadata';

const query = `
{
    allSitePage {
        nodes {
            path
        }
    }
    allContentfulProject {
        nodes {
            updatedAt
            slug
        }
    }
}
`;

const resolvePages = ({
    allSitePage,
    allContentfulProject,
}: Queries.SitemapQuery) => {
    const contentfulProjectMap = allContentfulProject.nodes?.reduce<
        Record<string, Queries.SitemapContentfulProject>
    >((acc, node) => {
        const { slug } = node;
        const path = `/projects/${slug}/`;
        acc[path] = node;

        return acc;
    }, {});
    if (!contentfulProjectMap) return allSitePage.nodes;
    return allSitePage.nodes.map((page) => {
        return { ...page, ...contentfulProjectMap[page.path] };
    });
};

const serialize = ({
    path,
    updatedAt,
}: Queries.SitemapSitePageNode & { updatedAt: unknown }) => {
    const priority = path === `/` ? 1.0 : 0.5;
    const sitemapOptions = { url: path, priority };
    if (typeof updatedAt === `string`)
        return {
            ...sitemapOptions,
            lastmod: updatedAt,
        };
    return {
        ...sitemapOptions,
    };
};

const gatsbyPluginSitemap = {
    resolve: `gatsby-plugin-sitemap`,
    options: {
        createLinkInHead: true,
        query,
        resolveSiteUrl: () => siteMetadata.siteUrl,
        resolvePages,
        serialize,
    },
};

export default gatsbyPluginSitemap;
