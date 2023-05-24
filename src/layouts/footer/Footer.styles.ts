import styled from 'styled-components';
import { media, layout } from '@/styles/mixins-temp';
import Wave from '@/assets/images/wave-footer.inline.svg';
import SocialLinks from '@/components/unstyled-components/social-links/SocialLinks';
import {
    SocialLink,
    SocialLinkName,
    SocialLinkIcon,
} from '@/components/unstyled-components/social-links/SocialLinks.styles';
import NavigationLinks from '@/components/unstyled-components/navigation-links/NavigationLinks';
import { NavigationLink } from '@/components/unstyled-components/navigation-links/NavigationLinks.styles';

export const FooterContainer = styled.footer`
    color: var(--color-primary-200);
`;

export const FooterWave = styled(Wave)`
    color: var(--color-secondary-100);
    display: block;
`;

export const FooterContentWrapper = styled.div`
    background-color: var(--color-secondary-100);
`;

export const FooterContentContainer = styled.div`
    ${layout.standard.viewportResponsive}
    background-color: var(--color-secondary-100);
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    display: grid;
    ${media.md} {
        padding-top: 0;
        grid-template-columns: 1fr 1fr;
    }
`;

export const FooterSocialLinksWrapper = styled.div`
    grid-row: 2;
    ${media.md} {
        grid-row: auto;
    }
`;

export const FooterNavigationWrapper = styled.nav`
    text-align: center;
    ${media.md} {
        text-align: end;
    }
`;

export const FooterSocialLinks = styled(SocialLinks)`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-inline: auto;
    width: max-content;
    ${SocialLink} {
        --footer-social-link-font-size: var(--fs-sm);
        width: max-content;
        gap: 1rem;
        display: flex;
        align-items: center;
        color: inherit;
        font-size: var(--footer-social-link-font-size);
        text-decoration: none;
    }
    ${SocialLinkName} {
        display: none;
    }
    ${SocialLinkIcon} {
        width: calc(2 * var(--footer-social-link-font-size));
    }
    ${media.md} {
        flex-direction: column;
        margin-top: 1.25rem;
        width: auto;
        ${SocialLinkName} {
            display: block;
        }
    }
`;

export const FooterCopyright = styled.p`
    font-size: var(--fs-sm);
    text-align: center;
    margin-top: 2rem;
    ${media.md} {
        grid-column: span 2;
    }
`;

export const FooterHeading = styled.h2`
    font-size: var(--fs-xl);
    font-weight: 600;
    text-transform: uppercase;
    ${media.custom(560)} {
        font-size: var(--fs-md);
    }
`;

export const FooterHeadingFromMediumScreen = styled(FooterHeading)`
    display: none;
    ${media.md} {
        display: block;
    }
`;

export const FooterSubHeading = styled.h3`
    font-size: var(--fs-base);
    font-weight: 400;
`;

export const FooterNavigationLinks = styled(NavigationLinks)`
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    ${NavigationLink} {
        color: inherit;
        text-transform: uppercase;
        text-decoration: none;
        font-size: var(--fs-sm);
    }
`;
