const siteSchema = `
    type Site {
        siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
        title: String!
        siteUrl: String!
        description: String!
        keywords: [String!]!
        facebook: SiteMetadataSocial!
        instagram: SiteMetadataSocial!
        behance: SiteMetadataSocial!
    }

    type SiteMetadataSocial {
        url: String!
        name: String!
    }
`;

export default siteSchema;
