import type { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
    actions,
}) => {
    actions.createTypes(`
        type Site {
            siteMetadata: SiteMetadata!
        }
        
        type SiteMetadata {
            title: String!
            siteURL: String!
            description: String!
            keywords: String!
            facebook: SiteMetadataSocial!
            instagram: SiteMetadataSocial!
            behance: SiteMetadataSocial!
        }

        type SiteMetadataSocial {
            url: String!
            name: String!
        }
    `);
};

export default createSchemaCustomization;
