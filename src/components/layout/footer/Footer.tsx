import React from "react";
import { FooterContainer, FooterContentContainer } from "./Footer.styles";
import FooterWave from "../../../assets/images/WaveFooter.inline.svg";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterWave />
        </FooterContainer>
    );
};

export default Footer;
