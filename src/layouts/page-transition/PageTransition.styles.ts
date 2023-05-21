import styled, { css } from 'styled-components';
import { PageTransitionContainerProps } from './PageTransition.types';
import { PageTransitionState } from '@/contexts/page-transition-context/PageTransitionContext.types';

export const PageTransitionContainer = styled.div<PageTransitionContainerProps>`
    width: 100%;
    height: 100%;
    position: fixed;
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
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes page-transition-container-slide-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
