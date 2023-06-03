import styled from 'styled-components';
import type { AnimatedLogoContainerProps } from './AnimatedLogo.types';

export const AnimatedLogoContainer = styled.svg<AnimatedLogoContainerProps>`
    --animated-logo-width: 5rem;
    --animated-logo-height: auto;
    --animated-logo-color: var(--color-secondary-300);
    width: var(--animated-logo-width);
    height: var(--animated-logo-height);
    color: var(--animated-logo-color);
`;
