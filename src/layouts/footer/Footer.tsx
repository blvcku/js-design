import type React from 'react';
import {
    FooterContainer,
    FooterContentWrapper,
    FooterContentContainer,
    FooterCopyright,
    FooterSocialLinksWrapper,
    FooterSocialLinks,
    FooterHeadingFromMediumScreen,
    FooterNavigationWrapper,
    FooterHeading,
    FooterSubHeading,
    FooterNavigationLinks,
    FooterWave,
} from './Footer.styles';
import footerNavigationLinks from './Footer.config';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterWave />
            <FooterContentWrapper>
                <FooterContentContainer>
                    <FooterSocialLinksWrapper>
                        <FooterHeadingFromMediumScreen>
                            Find me on:
                        </FooterHeadingFromMediumScreen>
                        <FooterSocialLinks displayName={true} />
                    </FooterSocialLinksWrapper>
                    <FooterNavigationWrapper>
                        <FooterHeading>Jacek Szczypior</FooterHeading>
                        <FooterSubHeading>Graphic Designer</FooterSubHeading>
                        <FooterNavigationLinks links={footerNavigationLinks} />
                    </FooterNavigationWrapper>
                    <FooterCopyright>
                        Copyright© {new Date().getFullYear()} Jacek Szczypior
                    </FooterCopyright>
                </FooterContentContainer>
            </FooterContentWrapper>
        </FooterContainer>
    );
};

export default Footer;
