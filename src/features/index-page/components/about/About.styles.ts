import styled from 'styled-components';
import { media } from '@/styles/Mixins';

export const AboutContainer = styled.section``;

export const AboutContentContainer = styled.div`
    background: var(--color-secondary-100);
    color: var(--color-primary-200);
    padding: max(10vw, 3.5rem) 0;
    & > p {
        font-weight: 500;
        font-size: var(--fs-lg);
        max-width: 50ch;
        margin-inline: auto;
        text-align: center;
        &:nth-of-type(2) {
            font-weight: 600;
            max-width: 25ch;
            margin-top: 2rem;
            ${media.sm} {
                margin-top: 3.5rem;
            }
        }
    }
    ${media.xl} {
        padding: max(6vw, 9.5rem) 0;
    }
`;

export const AboutWaveContainer = styled.div`
    position: relative;
    & > svg {
        color: var(--color-secondary-100);
        display: block;
    }
`;

export const AboutAnimatedWaveContainer = styled.div`
    & > svg {
        color: var(--color-secondary-100);
    }
`;

export const AboutLogoContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary-200);
    box-shadow: var(--shadow-1);
    border-radius: 50%;
    padding: 1rem;
    bottom: -5vw;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    & > svg {
        width: 5.5vw;
        height: auto;
        min-width: 3rem;
        color: var(--color-secondary-300);
    }
    ${media.sm} {
        bottom: -3vw;
        padding: 3vw;
        & > svg {
            width: 10vw;
        }
    }
    ${media.lg} {
        padding: 2vw;
        & > svg {
            width: 7vw;
        }
    }
    ${media.xl} {
        & > svg {
            width: 5.5vw;
        }
    }
`;
