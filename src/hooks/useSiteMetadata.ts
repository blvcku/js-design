import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadataProps {
    site: {
        siteMetadata: {
            title: string;
            description: string;
            keywords: string;
            siteURL: string;
            facebook: {
                url: string;
                name: string;
            };
            instagram: {
                url: string;
                name: string;
            };
            behance: {
                url: string;
                name: string;
            };
        };
    };
}

const useSiteMetadata = () => {
    const { site } = useStaticQuery<SiteMetadataProps>(graphql`
        query SiteMetaData {
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

    return site.siteMetadata;
};

export default useSiteMetadata;
