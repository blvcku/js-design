import styled from 'styled-components';
import {
    TypographyContainerProps,
    TypographyNameProps,
    TypographyWeightProps,
} from './Typography.types';
import { media, createFontFace, pixelsToRem } from '@/styles/mixins-temp';
import isNumber from '@/helpers/isNumber';

export const TypographyContainer = styled.section<TypographyContainerProps>`
    --typography-margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `3rem`};
    background-color: var(--color-secondary-400);
    color: var(--color-primary-200);
    padding-left: 15%;
    padding-block: 3rem;
    border-radius: 15px 15px 15px 45px;
    margin-top: calc(var(--typography-margin-top) * 0.5);

    ${media.sm} {
        margin-top: var(--typography-margin-top);
        background-color: transparent;
        color: var(--color-secondary-400);
        padding-block: 0;
    }
`;

export const TypographyName = styled.h2<TypographyNameProps>`
    font-family: ${({ fontName }) => fontName};
    font-style: ${({ fontStyle }) => fontStyle};
    font-weight: 600;
    font-size: var(--fs-xl);
`;

export const TypographyWeightsContainer = styled.ul`
    margin-top: 1.2rem;
    margin-left: 1.5rem;
    display: grid;
    gap: 1.5rem;
    ${media.sm} {
        margin-left: 3rem;
    }
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
