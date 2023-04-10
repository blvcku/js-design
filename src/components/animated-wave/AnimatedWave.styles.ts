import styled from 'styled-components';
import { media } from '@/styles/Mixins';
import { AnimatedWaveContainerProps } from './AnimatedWave.types';

export const AnimatedWaveContainer = styled.div<AnimatedWaveContainerProps>`
    ${({ animate }) =>
        animate
            ? `
            overflow:hidden;
            positon:relative;
            & > img{
                display:block;
                width:200vw;
            }
        `
            : `
            position:relative;
            & > img{
                display:block;
                width:100%;
            }
        `}
    & > div {
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
            min-width: 3.5rem;
            color: var(--color-secondary-300);
        }
        ${media.sm} {
            bottom: -3vw;
        }
        ${media.md} {
            padding: 2vw;
        }
    }
`;
