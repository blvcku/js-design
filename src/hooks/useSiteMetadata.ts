import { useContext } from 'react';
import { SiteMetadataContext } from '@/contexts/site-metadata-context/SiteMetadataContext';

const useSiteMetadata = () => {
    const context = useContext(SiteMetadataContext);
    if (context === undefined)
        throw new Error(`useSiteMetadata must be within SiteMetadataProvider`);
    return context;
};

export default useSiteMetadata;
