import styled from 'styled-components';
import { pixelsToRem } from '@/styles/Mixins';
import isNumber from '@/helpers/isNumber';
import {
    AccordionContainerProps,
    AccordionContentContainerProps,
} from './Accordion.types';

export const AccordionContainer = styled.details<AccordionContainerProps>`
    margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `3rem`};
    &[open] {
        summary {
            & > svg {
                transform: rotate(180deg);
            }
        }
    }
`;

export const AccordionTitle = styled.summary`
    --accordion-font-size: var(--fs-lg);
    font-size: var(--accordion-font-size);
    font-weight: 600;
    color: var(--color-tertiary-100);
    display: flex;
    gap: 0.8rem;
    align-items: center;
    user-select: none;
    &::marker {
        content: '';
        display: none;
    }
    & > svg {
        width: calc(var(--accordion-font-size) - 0.2rem);
    }
`;

export const AccordionContentContainer = styled.div<AccordionContentContainerProps>`
    padding-bottom: ${({ contentBottomMargin }) =>
        isNumber(contentBottomMargin)
            ? pixelsToRem(contentBottomMargin)
            : `3rem`};
    padding-inline: ${({ contentHorizontalMargin }) =>
        isNumber(contentHorizontalMargin)
            ? pixelsToRem(contentHorizontalMargin)
            : `0`};
`;
