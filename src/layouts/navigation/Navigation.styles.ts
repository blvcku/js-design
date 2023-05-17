import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Logo from '@/assets/icons/logo.inline.svg';
import LogoThick from '@/assets/icons/logo-thick.inline.svg';
import { media, layout } from '@/styles/mixins';
import NavigationLinks from '@/components/unstyled-components/navigation-links/NavigationLinks';
import { NavigationLink } from '@/components/unstyled-components/navigation-links/NavigationLinks.styles';
import { NavigationExpandableContentProps } from './Navigation.types';

export const NavigationContainer = styled.div`
    ${layout.large.viewportResponsive}
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 2rem;
    ${media.sm} {
        padding-top: 3rem;
        justify-content: space-between;
    }
`;

export const NavigationLogoContainer = styled(Link)`
    background: var(--color-secondary-100);
    padding: 0.5rem;
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: none;
    place-items: center;
    box-shadow: var(--shadow-1);
    ${media.sm} {
        display: grid;
    }
`;

export const NavigationExpandableContent = styled.div<NavigationExpandableContentProps>`
    --navigation-animation-duration: 0.3s;
    background: var(--color-secondary-400);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    max-width: min(300px, calc(100vw - 1rem));
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    box-shadow: var(--shadow-1);
    border-radius: 20px 0px 0px 20px;
    padding: 1.5rem 1.5rem 2rem;
    ${({ expanded }) =>
        expanded
            ? css`
                  transition: transform var(--navigation-animation-duration)
                      ease;
                  transform: translateX(0);
                  visibility: visible;
              `
            : css`
                  transition: transform var(--navigation-animation-duration)
                          ease,
                      visibility 0s var(--navigation-animation-duration);
                  transform: translateX(100%);
                  visibility: hidden;
                  user-select: none;
                  pointer-events: none;
                  * {
                      user-select: none;
                      pointer-events: none;
                  }
              `}
`;

export const NavigationLogoSmall = styled(LogoThick)`
    display: block;
    width: 2rem;
    height: auto;
    color: var(--color-primary-200);
`;

export const NavigationLogo = styled(Logo)`
    display: block;
    width: 3rem;
    height: auto;
    align-self: center;
    color: var(--color-primary-200);
`;

export const NavigationLinksStyled = styled(NavigationLinks)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    gap: 0.5rem;
    ${NavigationLink} {
        color: var(--color-primary-200);
        text-decoration: none;
        font-size: var(--fs-base);
        line-height: 1.5;
        border-right: 1px solid var(--color-primary-200);
        padding: 0.15rem 0.5rem 0.15rem;
    }
`;
