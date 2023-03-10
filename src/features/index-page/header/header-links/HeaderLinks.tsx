import React from 'react';
import FacebookLogo from '../../../../assets/icons/FacebookLogo.inline.svg';
import InstagramLogo from '../../../../assets/icons/InstagramLogo.inline.svg';
import BehanceLogo from '../../../../assets/icons/BehanceLogo.inline.svg';
import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import { HeaderLinksContainer } from './HeaderLinks.styles';

const HeaderLinks = () => {
    const { facebook, instagram, behance } = useSiteMetadata();

    return (
        <HeaderLinksContainer>
            <li>
                <a
                    aria-label="My facebook"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={facebook.url}
                >
                    <FacebookLogo />
                </a>
            </li>
            <li>
                <a
                    aria-label="My instagram"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={instagram.url}
                >
                    <InstagramLogo />
                </a>
            </li>
            <li>
                <a
                    aria-label="My behance"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={behance.url}
                >
                    <BehanceLogo />
                </a>
            </li>
        </HeaderLinksContainer>
    );
};

export default HeaderLinks;
