import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const SiteMetadataContext = React.createContext<
    Queries.SiteMetadata | undefined
>(undefined);

interface SiteMetadataProviderProps {
    children: React.ReactNode;
}

const SiteMetadataProvider: React.FC<SiteMetadataProviderProps> = ({
    children,
}) => {
    const { site } = useStaticQuery<Queries.SiteMetadataQuery>(query);

    if (!site) throw new Error(`Site metadata not found`);

    return (
        <SiteMetadataContext.Provider value={site.siteMetadata}>
            {children}
        </SiteMetadataContext.Provider>
    );
};

const query = graphql`
    query SiteMetadata {
        site {
            siteMetadata {
                title
                description
                keywords
                siteUrl
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
`;

export default SiteMetadataProvider;
