import React from 'react';
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

const footerNavigationLinks = [
    {
        name: `Landing page`,
        to: `/`,
    },
    {
        name: `I Create...`,
        to: `/#i-create`,
    },
    {
        name: `Projects`,
        to: `/#projects`,
    },
    {
        name: `Contact`,
        to: `/#contact`,
    },
];

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
