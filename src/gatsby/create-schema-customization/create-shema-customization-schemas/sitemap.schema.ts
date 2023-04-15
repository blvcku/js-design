const sitemapSchema = `
    type SitemapQuery {
        allSitePage: SitemapAllSitePage!
        allContentfulProject: SitemapAllContentfulProject!
    }

    type SitemapAllSitePage {
        nodes: [SitemapSitePageNode!]!
    }

    type SitemapSitePageNode {
        path: String!
    }

    type SitemapAllContentfulProject {
        nodes: [SitemapContentfulProject!]
    }

    type SitemapContentfulProject {
        updatedAt: String!
        slug: String!
    }
`;

export default sitemapSchema;
