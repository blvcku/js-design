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
    const transitionActive = transitionState !== PageTransitionState.INACTIVE;

    return (
        <DefaultLayoutContainer>
            <Navigation />
            {children}
            <Footer />
            {transitionActive ? <PageTransition /> : null}
            <GlobalStyle lockScroll={transitionActive} />
        </DefaultLayoutContainer>
    );
};

export default Layout;
