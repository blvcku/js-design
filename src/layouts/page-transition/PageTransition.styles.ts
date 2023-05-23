import styled, { css } from 'styled-components';
import {
    PageTransitionAnimatedLogoContainerProps,
    PageTransitionContainerProps,
} from './PageTransition.types';
import { PageTransitionState } from '@/contexts/page-transition-context/PageTransitionContext.types';
import AnimatedLogo from '@/components/styled-components/animated-logo/AnimatedLogo';

export const PageTransitionContainer = styled.div<PageTransitionContainerProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: var(--z-index-page-transition);
    background: var(--color-primary-100);
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ transitionState, entryDurationMs, exitDurationMs }) => {
        switch (transitionState) {
            case PageTransitionState.ENTRY:
                return css`
                    animation: page-transition-container-slide-in
                        ${entryDurationMs}ms ease forwards;
                `;
            case PageTransitionState.EXIT:
                return css`
                    animation: page-transition-container-slide-out
                        ${exitDurationMs}ms ease forwards;
                `;
            case PageTransitionState.INACTIVE:
                return null;
        }
    }}

    @keyframes page-transition-container-slide-in {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes page-transition-container-slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }
`;

export const PageTransitionAnimatedLogoContainer = styled.div<PageTransitionAnimatedLogoContainerProps>`
    background: var(--color-secondary-100);
    padding: max(1.5vw, 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transform: scale(0);
    box-shadow: var(--shadow-1);
    ${({ animationDurationMs, animationDelayMs }) => css`
        animation: page-transition-animated-logo-container-pop-out
            ${animationDurationMs}ms cubic-bezier(0.17, 0.67, 0.45, 1.63)
            ${animationDelayMs}ms forwards;
    `}
    @keyframes page-transition-animated-logo-container-pop-out {
        to {
            transform: scale(1);
        }
    }
`;

export const PageTransitionAnimatedLogo = styled(AnimatedLogo)`
    --animated-logo-width: 5vw;
    --animated-logo-color: var(--color-primary-200);
    min-width: 6rem;
`;
