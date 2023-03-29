import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { NavigationExpandableContentProps } from './Navigation.types';

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 2rem;
    padding-inline: 1rem;
    max-width: max(calc(100vw) - 480px, 1350px);
    margin-inline: auto;
    @media (min-width: 500px) {
        padding-top: 3rem;
        justify-content: space-between;
    }
`;

export const NavigationLogoContainer = styled(AnchorLink)`
    background: var(--color-secondary-100);
    padding: 0.5rem;
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: none;
    place-items: center;
    box-shadow: var(--shadow-1);
    & > svg {
        display: block;
        width: 2rem;
        height: auto;
        color: var(--color-primary-200);
    }
    @media (min-width: 500px) {
        display: grid;
    }
`;

export const NavigationExpandableContent = styled.div<NavigationExpandableContentProps>`
    background: var(--color-secondary-300);
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
    transform: translateX(100%);
    transition: transform 0.3s ease;
    visibility: hidden;
    padding: 1.5rem 1.5rem 2rem;
    ${({ expanded }) =>
        expanded &&
        `
        transform:translateX(0);
        visibility:visible;
    `}

    & > svg {
        display: block;
        width: 3rem;
        height: auto;
        align-self: center;
        color: var(--color-primary-200);
    }
`;

export const NavigationLinksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    gap: 0.5rem;
`;

export const NavigationLink = styled(AnchorLink)`
    color: var(--color-primary-200);
    text-decoration: none;
    font-size: var(--fs-md);
    line-height: 1.5;
    border-right: 1px solid var(--color-primary-200);
    padding: 0.15rem 0.5rem 0.15rem;
`;
