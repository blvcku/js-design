import styled from 'styled-components';
import { media } from '@/styles/mixins';

export const AboutContainer = styled.section``;

export const AboutContentContainer = styled.div`
    background: var(--color-secondary-100);
    color: var(--color-primary-200);
    padding: max(10vw, 3.5rem) 0;
    ${media.xl} {
        padding: max(6vw, 9.5rem) 0;
    }
`;

export const AboutWaveWrapper = styled.div`
    position: relative;
`;

export const AboutWave = styled.svg`
    color: var(--color-secondary-100);
    display: block;
    position: relative;
    z-index: -1;
`;
