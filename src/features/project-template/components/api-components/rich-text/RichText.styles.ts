import styled from 'styled-components';
import { media, pixelsToRem } from '@/styles/mixins';
import type { RichTextContainerProps } from './RichText.types';
import isNumber from '@/helpers/isNumber';

export const RichTextContainer = styled.section<RichTextContainerProps>`
    --rich-text-margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `3rem`};
    --rich-text-list-margin-block: 2rem;
    --rich-text-list-padding-left: 5rem;
    --rich-text-list-item-margin-top: 1rem;
    --rich-text-blockquote-padding-left: 1.5rem;
    --rich-text-elements-margin-top: 1.5rem;
    --rich-text-elements-color: var(--color-secondary-400);
    margin-top: calc(var(--rich-text-margin-top) * 0.5);
    font-size: var(--fs-lg);
    font-weight: 500;
    * {
        margin-top: calc(var(--rich-text-elements-margin-top) * 0.75);
    }
    *:first-child {
        margin-top: 0;
    }
    ul {
        list-style-type: disc;
    }
    ol {
        list-style-type: decimal;
    }
    ul,
    ol {
        margin-block: calc(var(--rich-text-list-margin-block) * 0.75);
        padding-left: calc(var(--rich-text-list-padding-left) * 0.5);
        color: var(--rich-text-elements-color);
        font-size: var(--fs-md);
    }
    li {
        margin-top: calc(var(--rich-text-list-item-margin-top) * 0.75);
    }
    h2 {
        font-size: var(--fs-2xl);
        font-weight: 900;
    }
    h3 {
        font-size: var(--fs-2xl);
        font-weight: 700;
    }
    h4 {
        font-size: var(--fs-xl);
        font-weight: 700;
    }
    h5 {
        font-size: var(--fs-lg);
        font-weight: 700;
    }
    h6 {
        font-size: var(--fs-lg);
        font-weight: 600;
    }
    table,
    td,
    th {
        border: 2px solid var(--color-secondary-400);
        padding: 1rem;
    }
    table {
        box-shadow: var(--shadow-1);
        font-size: var(--fs-base);
        color: var(--rich-text-elements-color);
        border-collapse: collapse;
    }
    th {
        font-weight: 600;
    }
    blockquote {
        color: var(--rich-text-elements-color);
        padding-left: calc(var(--rich-text-blockquote-padding-left) * 0.75);
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0.25rem;
            background: var(--rich-text-elements-color);
        }
    }

    ${media.sm} {
        margin-top: var(--rich-text-margin-top);
        * {
            margin-top: var(--rich-text-elements-margin-top);
        }
        ul,
        ol {
            margin-block: var(--rich-text-list-margin-block);
            padding-left: var(--rich-text-list-padding-left);
        }
        li {
            margin-top: var(--rich-text-list-item-margin-top);
        }
        blockquote {
            padding-left: var(--rich-text-blockquote-padding-left);
        }
    }
`;

export const RichTextBold = styled.span`
    font-weight: 700;
`;

export const RichTextItalic = styled.span`
    font-style: italic;
`;

export const RichTextUnderline = styled.span`
    text-decoration: underline;
`;
