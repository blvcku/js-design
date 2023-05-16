import styled from 'styled-components';
import { pixelsToRem } from '@/styles/Mixins';
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
    margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `3rem`};
    &[open] {
        ${AccordionIcon} {
            transform: rotate(180deg);
        }
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
    padding-bottom: ${({ contentBottomMargin }) =>
        isNumber(contentBottomMargin)
            ? pixelsToRem(contentBottomMargin)
            : `3rem`};
`;
