import React from 'react';
import {
    FooterSocialLinksContainer,
    FooterSocialLinksList,
    FooterSocialLinkWrapper,
} from './FooterSocialLinks.styles';
import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import FacebookLogo from '../../../../assets/icons/FacebookLogo.inline.svg';
import InstagramLogo from '../../../../assets/icons/InstagramLogo.inline.svg';
import BehanceLogo from '../../../../assets/icons/BehanceLogo.inline.svg';

const FooterSocialLinks: React.FC = () => {
    const { facebook, instagram, behance } = useSiteMetadata();
    return (
        <FooterSocialLinksContainer>
            <h2>Find me on:</h2>
            <FooterSocialLinksList>
                <FooterSocialLinkWrapper>
                    <a
                        aria-label="My facebook"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={facebook.url}
                    >
                        <FacebookLogo />
                        <p>{facebook.name}</p>
                    </a>
                </FooterSocialLinkWrapper>
                <FooterSocialLinkWrapper>
                    <a
                        aria-label="My instagram"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={instagram.url}
                    >
                        <InstagramLogo />
                        <p>{instagram.name}</p>
                    </a>
                </FooterSocialLinkWrapper>
                <FooterSocialLinkWrapper>
                    <a
                        aria-label="My behance"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={behance.url}
                    >
                        <BehanceLogo />
                        <p>{behance.name}</p>
                    </a>
                </FooterSocialLinkWrapper>
            </FooterSocialLinksList>
        </FooterSocialLinksContainer>
    );
};

export default FooterSocialLinks;
