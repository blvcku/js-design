import { css } from 'styled-components';
import { globalFontSizePercentage } from './GlobalStyle';

export const pixelsToRem = (pixels: number) =>
    `${pixels / (globalFontSizePercentage / 6.25)}rem`;

const customMedia = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export const media = {
    custom: customMedia,
    xs: customMedia(350),
    sm: customMedia(500),
    md: customMedia(800),
    lg: customMedia(1050),
    xl: customMedia(1600),
};

export const layout = {
    standard: {
        default: css`
            max-width: 1280px;
            width: 100%;
            padding-inline: 1rem;
            margin-inline: auto;
            ${media.xs} {
                padding-inline: 2rem;
            }
        `,
        viewportResponsive: css`
            max-width: max(calc(100vw) - 800px, 1280px);
            width: 100%;
            padding-inline: 1rem;
            margin-inline: auto;
            ${media.xs} {
                padding-inline: 2rem;
            }
        `,
    },
    large: {
        default: css`
            max-width: 1350px;
            width: 100%;
            padding-inline: 1rem;
            margin-inline: auto;
            ${media.xs} {
                padding-inline: 2rem;
            }
        `,
        viewportResponsive: css`
            max-width: max(calc(100vw) - 450px, 1350px);
            width: 100%;
            padding-inline: 1rem;
            margin-inline: auto;
            ${media.xs} {
                padding-inline: 2rem;
            }
        `,
    },
};

export const createFontFace = (
    name: string,
    url: string,
    weight: number,
    style: string,
) => css`
    @font-face {
        font-family: ${name};
        src: url(${url});
        font-weight: ${weight};
        font-style: ${style};
    }
`;
