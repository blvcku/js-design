import React from 'react';
import {
    FooterContainer,
    FooterContentWrapper,
    FooterContentContainer,
} from './Footer.styles';
import FooterWave from '../../../assets/images/WaveFooter.inline.svg';
import FooterSocialLinks from './footer-social-links/FooterSocialLinks';
import FooterNavigation from './footer-navigation/FooterNavigation';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterWave />
            <FooterContentWrapper>
                <FooterContentContainer>
                    <FooterSocialLinks />
                    <FooterNavigation />
                    <p>Copyright© {new Date().getFullYear()} Jacek Szczypior</p>
                </FooterContentContainer>
            </FooterContentWrapper>
        </FooterContainer>
    );
};

export default Footer;
