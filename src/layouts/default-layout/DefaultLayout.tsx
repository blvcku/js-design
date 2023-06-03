import type React from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import { DefaultLayoutContainer } from './DefaultLayout.styles';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import PageTransition from '../page-transition/PageTransition';
import usePageTransition from '@/contexts/page-transition-context/usePageTransition';
import { PageTransitionState } from '@/contexts/page-transition-context/PageTransitionContext.types';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { transitionState } = usePageTransition();

    return (
        <DefaultLayoutContainer>
            <Navigation />
            {children}
            <Footer />
            <PageTransition />
            <GlobalStyle
                lockScroll={transitionState !== PageTransitionState.INACTIVE}
            />
        </DefaultLayoutContainer>
    );
};

export default Layout;
