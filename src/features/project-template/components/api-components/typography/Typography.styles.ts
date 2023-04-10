import styled from 'styled-components';
import {
    TypographyContainerProps,
    TypographyNameProps,
    TypographyWeightProps,
} from './Typography.types';
import { createFontFace, pixelsToRem } from '@/styles/Mixins';
import isNumber from '@/helpers/isNumber';

export const TypographyContainer = styled.div<TypographyContainerProps>`
    display: inline-block;
    color: var(--color-secondary-400);
    margin-left: 15%;
    margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `3rem`};
`;

export const TypographyName = styled.h2<TypographyNameProps>`
    font-family: ${({ fontName }) => fontName};
    font-style: ${({ fontStyle }) => fontStyle};
    font-weight: 600;
    font-size: var(--fs-xl);
`;

export const TypographyWeightsContainer = styled.ul`
    margin-top: 1.2rem;
    margin-left: 3rem;
    display: grid;
    gap: 1.5rem;
`;

export const TypographyWeight = styled.li<TypographyWeightProps>`
    ${({ fontWeight, fontName, fontStyle, fontUrl }) =>
        createFontFace(fontName, fontUrl, fontWeight, fontStyle)}
    font-family: ${({ fontName }) => fontName};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: ${({ fontStyle }) => fontStyle};
    font-size: var(--fs-lg);
    text-transform: capitalize;
`;
