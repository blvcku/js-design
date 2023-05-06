import styled, { css } from 'styled-components';
import { AnimatedLogoPathElementProps } from './AnimatedLogoPath.types';

export const AnimatedLogoPathElement = styled.path<AnimatedLogoPathElementProps>`
    stroke-dasharray: ${({ pathLength }) => pathLength};
    stroke-dashoffset: ${({ toggleAnimation, pathLength }) =>
        toggleAnimation ? 0 : pathLength};
    ${({ toggleAnimation, durationMs, delayMs }) =>
        toggleAnimation
            ? css`
                  transition: stroke-dashoffset ${durationMs}ms ease-out
                      ${delayMs}ms;
              `
            : ``}
`;
