import styled, { css } from 'styled-components';
import { AnimatedLogoPathElementProps } from './AnimatedLogoPath.types';

export const AnimatedLogoPathElement = styled.path<AnimatedLogoPathElementProps>`
    stroke-dasharray: ${({ pathLength }) => pathLength};
    stroke-dashoffset: ${({ pathLength }) => pathLength};
    ${({ toggleAnimation, durationMs, delayMs }) =>
        toggleAnimation
            ? css`
                  animation: animated-logo-path-draw ${durationMs}ms ease-out
                      ${delayMs}ms forwards;
              `
            : null}

    @keyframes animated-logo-path-draw {
        to {
            stroke-dashoffset: 0;
        }
    }
`;
