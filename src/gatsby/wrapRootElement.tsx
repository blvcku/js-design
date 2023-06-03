import type { GatsbySSR, GatsbyBrowser } from 'gatsby';
import SiteMetadataProvider from '@/contexts/site-metadata-context/SiteMetadataContext';
import PageTransitionProvider from '@/contexts/page-transition-context/PageTransitionContext';

const wrapRootElement: GatsbySSR['wrapRootElement'] &
    GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return (
        <PageTransitionProvider>
            <SiteMetadataProvider>{element}</SiteMetadataProvider>
        </PageTransitionProvider>
    );
};

export default wrapRootElement;
