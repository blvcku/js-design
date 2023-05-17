import styled, { css } from 'styled-components';
import { ImageContainerProps } from './Image.types';
import isNumber from '@/helpers/isNumber';
import { media, pixelsToRem } from '@/styles/Mixins';

export const ImageContainer = styled.div<ImageContainerProps>`
    --image-margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `4rem`};
    margin-top: calc(var(--image-margin-top) * 0.5);

    ${({ roundedCorners }) =>
        roundedCorners
            ? css`
                  border-radius: 15px;
                  overflow: hidden;
              `
            : null}

    ${media.sm} {
        margin-top: var(--image-margin-top);
    }
`;
