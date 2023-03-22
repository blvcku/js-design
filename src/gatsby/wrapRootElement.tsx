import { GatsbySSR, GatsbyBrowser } from 'gatsby';
import SiteMetadataProvider from '@/contexts/SiteMetadataContext';

const wrapRootElement: GatsbySSR['wrapRootElement'] &
    GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return <SiteMetadataProvider>{element}</SiteMetadataProvider>;
};

export default wrapRootElement;
