import styled, { css } from 'styled-components';
import type { AnimatedLogoPathElementProps } from './AnimatedLogoPath.types';

export const AnimatedLogoPathElement = styled.path<AnimatedLogoPathElementProps>`
    /* + 1 because of a weird bug on some browsers that causes path
    to not hide completely before the animation begins */
    stroke-dasharray: ${({ pathLength }) => pathLength + 1};
    stroke-dashoffset: ${({ pathLength }) => pathLength + 1};
    ${({ toggleAnimation, animationDurationMs, animationDelayMs }) =>
        toggleAnimation
            ? css`
                  animation: animated-logo-path-draw ${animationDurationMs}ms
                      ease-out ${animationDelayMs}ms forwards;
              `
            : null}

    @keyframes animated-logo-path-draw {
        to {
            stroke-dashoffset: 0;
        }
    }
`;
