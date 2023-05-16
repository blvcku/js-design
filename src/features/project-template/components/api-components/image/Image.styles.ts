import styled, { css } from 'styled-components';
import { ImageContainerProps } from './Image.types';
import isNumber from '@/helpers/isNumber';
import { pixelsToRem } from '@/styles/Mixins';

export const ImageContainer = styled.div<ImageContainerProps>`
    margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `4rem`};
    ${({ roundedCorners }) =>
        roundedCorners
            ? css`
                  border-radius: 15px;
                  overflow: hidden;
              `
            : null}
`;
