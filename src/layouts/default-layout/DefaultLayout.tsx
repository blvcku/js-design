import React from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import { DefaultLayoutProps } from './DefaultLayout.types';
import { DefaultLayoutContainer } from './DefaultLayout.styles';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const Layout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <DefaultLayoutContainer>
            <Navigation />
            {children}
            <Footer />
            <GlobalStyle />
        </DefaultLayoutContainer>
    );
};

export default Layout;
