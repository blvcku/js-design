import React from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import { LayoutProps } from './Layout.types';
import { LayoutContainer } from './Layout.styles';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutContainer>
            <Navigation />
            {children}
            <Footer />
            <GlobalStyle />
        </LayoutContainer>
    );
};

export default Layout;
