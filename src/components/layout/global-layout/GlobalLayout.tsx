import React from "react";
import GlobalStyle from "../../../styles/GlobalStyle";
import { GlobalLayoutProps } from "./GlobalLayout.types";
import { GlobalLayoutContainer } from "./GlobalLayout.styles";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
    return (
        <GlobalLayoutContainer>
            <Navigation />
            {children}
            <Footer />
            <GlobalStyle />
        </GlobalLayoutContainer>
    );
};

export default GlobalLayout;
