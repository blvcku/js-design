import styled from 'styled-components';
import { media } from '@/styles/mixins';
import type { AboutLogoContainerProps } from './AboutLogo.types';
import AnimatedLogo from '@/components/styled-components/animated-logo/AnimatedLogo';

export const AboutLogoContainer = styled.div<AboutLogoContainerProps>`
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
        scale(${({ toggleAnimation }) => (toggleAnimation ? 1 : 0)});
    transition: transform ${({ animationDurationMs }) => animationDurationMs}ms
        cubic-bezier(0.17, 0.67, 0.45, 1.63);
    background: var(--color-primary-200);
    box-shadow: var(--shadow-1);
    border-radius: 50%;
    padding: 1rem;
    bottom: -7vw;
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

export const AboutLogoAnimatedLogo = styled(AnimatedLogo)`
    --animated-logo-width: 5.5vw;
    --animated-logo-height: auto;
    min-width: 4rem;
    ${media.sm} {
        --animated-logo-width: 10vw;
    }
    ${media.lg} {
        --animated-logo-width: 8vw;
    }
    ${media.xl} {
        --animated-logo-width: 6vw;
    }
`;
