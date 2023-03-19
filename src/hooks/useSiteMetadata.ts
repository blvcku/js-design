import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery<Queries.SiteMetadataQuery>(graphql`
        query SiteMetadata {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                    siteURL
                    facebook {
                        url
                        name
                    }
                    instagram {
                        url
                        name
                    }
                    behance {
                        url
                        name
                    }
                }
            }
        }
    `);
    if (!site) throw new Error(`Site metadata not found`);
    return site.siteMetadata;
};

export default useSiteMetadata;
