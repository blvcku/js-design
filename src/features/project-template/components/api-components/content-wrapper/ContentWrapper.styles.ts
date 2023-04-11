import styled from 'styled-components';
import { ContentWrapperContainerProps } from './ContentWrapper.types';
import isNumber from '@/helpers/isNumber';
import { media, pixelsToRem } from '@/styles/Mixins';

export const ContentWrapperContainer = styled.div<ContentWrapperContainerProps>`
    padding-inline: ${({ contentHorizontalMargin }) =>
        isNumber(contentHorizontalMargin)
            ? pixelsToRem(contentHorizontalMargin)
            : `0`};
    ${({
        contentAlignInline,
        contentAlignInlineBreakpoint,
        contentHorizontalGap,
    }) =>
        contentAlignInline
            ? `
                  ${
                      isNumber(contentAlignInlineBreakpoint)
                          ? media.custom(contentAlignInlineBreakpoint)
                          : media.md
                  } {
                      display: flex;
                      column-gap: ${
                          isNumber(contentHorizontalGap)
                              ? pixelsToRem(contentHorizontalGap)
                              : 0
                      };
                  }
              `
            : ``}
`;
