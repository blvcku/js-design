import styled from 'styled-components';
import { media } from '@/styles/Mixins';
import { AboutLogoElementWrapperProps } from './AboutLogo.types';

export const AboutLogoContainer = styled.div`
    --about-logo-background-color: var(--color-primary-200);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--about-logo-background-color);
    box-shadow: var(--shadow-1);
    border-radius: 50%;
    padding: 1rem;
    bottom: -5vw;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    ${media.sm} {
        bottom: -3vw;
        padding: 3vw;
    }
    ${media.lg} {
        padding: 2vw;
    }
`;

export const AboutLogoElementWrapper = styled.svg<AboutLogoElementWrapperProps>`
    width: 5.5vw;
    height: auto;
    min-width: 3rem;
    color: var(--color-secondary-300);
    path {
        /* TODO: Animate paths when isVisible is true */
    }
    ${media.sm} {
        width: 10vw;
    }
    ${media.lg} {
        width: 7vw;
    }
    ${media.xl} {
        width: 5.5vw;
    }
`;
