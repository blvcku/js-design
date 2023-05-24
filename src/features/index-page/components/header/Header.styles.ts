import styled from 'styled-components';
import { media, layout } from '@/styles/mixins-temp';
import SocialLinks from '@/components/unstyled-components/social-links/SocialLinks';
import { SocialLinkIcon } from '@/components/unstyled-components/social-links/SocialLinks.styles';

export const HeaderContainer = styled.header`
    ${layout.standard.default}
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    ${media.lg} {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
            'h1 img socials'
            'h2 img h3';
    }
`;

export const HeaderHeading = styled.h1`
    grid-area: h1;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--fs-3xl);
    font-weight: 800;
    ${media.lg} {
        margin-top: 8rem;
        text-align: start;
        & > span {
            display: block;
        }
    }
`;

export const HeaderSecondHeading = styled.h2`
    grid-area: h2;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--fs-lg);
    font-weight: 600;
    ${media.lg} {
        text-align: start;
        align-self: end;
        margin-bottom: 6rem;
        & > span {
            display: block;
        }
    }
`;

export const HeaderThirdHeading = styled.h3`
    grid-area: h3;
    order: 2;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--fs-3xl);
    font-weight: 800;
    ${media.lg} {
        text-align: start;
        align-self: end;
        margin-bottom: 6rem;
        & > span {
            display: block;
        }
    }
`;

export const HeaderImageContainer = styled.div`
    grid-area: img;
    order: 1;
    margin-top: 2.5rem;
    ${media.lg} {
        margin-top: 0;
    }
`;

export const HeaderSocialLinks = styled(SocialLinks)`
    grid-area: socials;
    margin-top: 8rem;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
    ${SocialLinkIcon} {
        width: 3.8rem;
        height: auto;
        display: block;
        color: var(--color-secondary-400);
    }
    ${media.lg} {
        display: flex;
    }
`;
