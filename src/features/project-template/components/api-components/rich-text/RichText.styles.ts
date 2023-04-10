import styled from 'styled-components';
import { pixelsToRem } from '@/styles/Mixins';
import { RichTextContainerProps } from './RichText.types';
import isNumber from '@/helpers/isNumber';

export const RichTextContainer = styled.div<RichTextContainerProps>`
    margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `3rem`};
    font-size: var(--fs-lg);
    font-weight: 500;

    ul {
        list-style-type: disc;
    }
    ol {
        list-style-type: decimal;
    }
    ul,
    ol {
        margin-block: 2rem;
        color: var(--color-secondary-400);
        font-size: var(--fs-md);
        padding-left: 5rem;
        * {
            margin-top: 1rem;
        }
        & > :first-child {
            margin-top: 0;
        }
        &:first-child {
            margin-top: 0;
        }
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
        color: var(--color-secondary-400);
        border-collapse: collapse;
        * {
            margin-top: 0;
        }
    }
    th {
        font-weight: 600;
    }

    blockquote {
        color: var(--color-secondary-400);
        padding-left: 1.5rem;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0.25rem;
            background: var(--color-secondary-400);
        }
    }

    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    blockquote,
    table {
        margin-top: 1.5rem;
        &:first-child {
            margin-top: 0;
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
