import styled from 'styled-components';
import { media, pixelsToRem } from '@/styles/mixins';
import type { ColorsContainerProps, ColorBoxProps } from './Colors.types';
import isNumber from '@/utils/isNumber';

export const ColorsContainer = styled.ul<ColorsContainerProps>`
    --colors-margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `4rem`};
    margin-top: calc(var(--colors-margin-top) * 0.5);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 13%;
    row-gap: 2rem;
    padding-inline: 15%;
    ${media.sm} {
        margin-top: var(--colors-margin-top);
        grid-template-columns: repeat(2, 1fr);
        padding-inline: 0;
    }
    ${media.md} {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 4rem;
    }
`;

export const ColorBox = styled.div<ColorBoxProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 15px;
    box-shadow: var(--shadow-1);
`;

export const ColorName = styled.h2`
    font-weight: 500;
    font-size: var(--fs-md);
    text-align: center;
    margin-top: 1.5rem;
`;

export const ColorContainer = styled.li`
    &:first-of-type {
        ${ColorBox} {
            border-radius: 45px 45px 15px 15px;
        }
    }
    &:last-of-type {
        ${ColorBox} {
            border-radius: 15px 15px 45px 45px;
        }
    }
    ${media.sm} {
        &:nth-of-type(odd) {
            ${ColorBox} {
                border-radius: 45px 15px 15px 45px;
            }
        }
        &:nth-of-type(even) {
            ${ColorBox} {
                border-radius: 15px 45px 45px 15px;
            }
        }
    }
    ${media.md} {
        ${ColorBox} {
            border-radius: 15px !important;
        }
        &:nth-of-type(3n + 1) {
            ${ColorBox} {
                border-radius: 45px 15px 15px 45px !important;
            }
        }
        &:nth-of-type(3n) {
            ${ColorBox} {
                border-radius: 15px 45px 45px 15px !important;
            }
        }
    }
`;
