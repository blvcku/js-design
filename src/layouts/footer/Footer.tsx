import React from 'react';
import {
    FooterContainer,
    FooterContentWrapper,
    FooterContentContainer,
    FooterCopyright,
} from './Footer.styles';
import FooterWave from '@/assets/images/wave-footer.inline.svg';
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
                    <FooterCopyright>
                        Copyright© {new Date().getFullYear()} Jacek Szczypior
                    </FooterCopyright>
                </FooterContentContainer>
            </FooterContentWrapper>
        </FooterContainer>
    );
};

export default Footer;
