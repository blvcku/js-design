import styled from 'styled-components';
import { ButtonContainerProps } from './Button.types';

export const ButtonContainer = styled.button<ButtonContainerProps>`
    --padding-vertical: 0.7rem;
    --font-size: var(--fs-base);
    --bg-color: var(--color-secondary-100);
    --icon-height: calc(var(--font-size) * 1.2);
    color: var(--color-primary-200);
    font-size: var(--font-size);
    padding-inline: 3.6rem;
    ${({ sizeVariant }) => sizeVariant}
    ${({ colorVariant }) => colorVariant}
    background-color:var(--bg-color);
    min-height: calc(var(--icon-height) + 2 * var(--padding-vertical));
    position: relative;
    border-radius: 12px;
    box-shadow: var(--shadow-1);
    border: none;
    overflow: hidden;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    svg,
    img {
        display: block;
        height: var(--icon-height);
        width: auto;
    }
    svg[data-loading-wheel='true'] {
        display: none;
        position: absolute;
        height: calc(2 * var(--font-size));
    }
    &:disabled {
        svg[data-loading-wheel='true'] {
            display: block;
        }
        &::before {
            transition: background 0.3s ease;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--bg-color);
        }
    }
`;
