import styled from 'styled-components';
import { ContentWrapperContainerProps } from './ContentWrapper.types';
import isNumber from '@/helpers/isNumber';
import { media, pixelsToRem } from '@/styles/Mixins';

export const ContentWrapperContainer = styled.div<ContentWrapperContainerProps>`
    --content-wrapper-margin-top: ${({ contentMarginTop }) =>
        isNumber(contentMarginTop) ? pixelsToRem(contentMarginTop) : `0`};
    --content-wrapper-padding-inline: ${({ contentHorizontalMargin }) =>
        isNumber(contentHorizontalMargin)
            ? pixelsToRem(contentHorizontalMargin)
            : `0`};
    --content-wrapper-content-horizontal-gap: ${({ contentHorizontalGap }) =>
        isNumber(contentHorizontalGap) ? pixelsToRem(contentHorizontalGap) : 0};
    padding-inline: calc(var(--content-wrapper-padding-inline) * 0.5);
    margin-top: calc(var(--content-wrapper-margin-top) * 0.5);

    ${({ contentAlignInline, contentAlignInlineBreakpoint }) =>
        contentAlignInline
            ? `
                  ${
                      isNumber(contentAlignInlineBreakpoint)
                          ? media.custom(contentAlignInlineBreakpoint)
                          : media.md
                  } {
                      display: flex;
                      column-gap: var(--content-wrapper-content-horizontal-gap);
                  }
              `
            : null}

    ${media.sm} {
        padding-inline: var(--content-wrapper-padding-inline);
        margin-top: var(--content-wrapper-margin-top);
    }
`;
