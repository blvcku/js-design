import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import siteMetadata from './siteMetadata';

const plugins = (
    CONTENTFUL_API_KEY: string | undefined,
    CONTENTFUL_SPACE_ID: string | undefined,
): GatsbyConfig['plugins'] => [
    {
        resolve: `gatsby-source-contentful`,
        options: {
            accessToken: CONTENTFUL_API_KEY,
            spaceId: CONTENTFUL_SPACE_ID,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: path.join(__dirname, `../assets/images/`),
        },
    },
    {
        resolve: `gatsby-plugin-react-svg`,
        options: {
            rule: {
                include: /\.inline\.svg$/,
                omitKeys: [
                    `xmlnsDc`,
                    `xmlnsCc`,
                    `xmlnsRd`,
                    `xmlnsSvg`,
                    `xmlnsSodipodi`,
                    `xmlnsInkscape`,
                ],
            },
        },
    },
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
            defaults: {
                formats: [`auto`],
                placeholder: `blurred`,
                backgroundColor: `transparent`,
            },
        },
    },
    {
        resolve: `gatsby-plugin-sitemap`,
        options: {
            createLinkInHead: true,
            query: `
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
            `,
            resolveSiteUrl: () => siteMetadata.siteUrl,
            resolvePages: ({
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
            },
            serialize: ({
                path,
                updatedAt,
            }: Queries.SitemapSitePageNode & { updatedAt: unknown }) => {
                const priority = path === `/` ? 1.0 : 0.5;
                const obj = { url: path, priority };
                if (typeof updatedAt === `string`)
                    return {
                        ...obj,
                        lastmod: updatedAt,
                    };
                return {
                    ...obj,
                };
            },
        },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
];

export default plugins;
