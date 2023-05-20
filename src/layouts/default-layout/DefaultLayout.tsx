import React from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import { DefaultLayoutProps } from './DefaultLayout.types';
import { DefaultLayoutContainer } from './DefaultLayout.styles';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import PageTransition from '../page-transition/PageTransition';

const Layout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <DefaultLayoutContainer>
            <Navigation />
            {children}
            <Footer />
            <PageTransition />
            <GlobalStyle />
        </DefaultLayoutContainer>
    );
};

export default Layout;
