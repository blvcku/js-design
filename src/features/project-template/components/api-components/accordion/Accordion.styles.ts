import styled from 'styled-components';
import { media, pixelsToRem } from '@/styles/Mixins';
import isNumber from '@/helpers/isNumber';
import ArrowIcon from '@/assets/icons/arrow-vertical.inline.svg';
import {
    AccordionContainerProps,
    AccordionContentContainerProps,
} from './Accordion.types';

export const AccordionIcon = styled(ArrowIcon)`
    width: calc(var(--accordion-font-size) - 0.2rem);
    color: var(--color-tertiary-100);
`;

export const AccordionContainer = styled.details<AccordionContainerProps>`
    --accordion-margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `3rem`};
    margin-top: calc(var(--accordion-margin-top) * 0.5);
    &[open] {
        ${AccordionIcon} {
            transform: rotate(180deg);
        }
    }
    ${media.sm} {
        margin-top: var(--accordion-margin-top);
    }
`;

export const AccordionTitle = styled.summary`
    --accordion-font-size: var(--fs-lg);
    font-size: var(--accordion-font-size);
    font-weight: 600;
    color: var(--color-tertiary-100);
    display: flex;
    width: max-content;
    gap: 0.8rem;
    align-items: center;
    user-select: none;
    cursor: pointer;
    &::marker {
        content: '';
        display: none;
    }
`;

export const AccordionContentContainer = styled.div<AccordionContentContainerProps>`
    --accordion-content-padding-bottom: ${({ contentBottomMargin }) =>
        isNumber(contentBottomMargin)
            ? pixelsToRem(contentBottomMargin)
            : `3rem`};
    padding-bottom: calc(var(--accordion-content-padding-bottom) * 0.5);
    ${media.sm} {
        padding-bottom: var(--accordion-content-padding-bottom);
    }
`;
