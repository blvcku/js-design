import styled from 'styled-components';

export const ButtonContainer = styled.button`
    --button-padding-inline: 3.6rem;
    --button-padding-vertical: 0.7rem;
    --button-font-size: var(--fs-sm);
    --button-background-color: var(--color-secondary-400);
    --button-text-color: var(--color-primary-200);
    --button-icon-height: calc(var(--button-font-size) * 1.2);
    color: var(--button-text-color);
    font-size: var(--button-font-size);
    padding-inline: var(--button-padding-inline);
    background-color: var(--button-background-color);
    min-height: calc(
        var(--button-icon-height) + 2 * var(--button-padding-vertical)
    );
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
        height: var(--button-icon-height);
        width: auto;
    }
    svg[data-loading-wheel='true'] {
        display: none;
        position: absolute;
        height: calc(2 * var(--button-font-size));
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
            background: var(--button-background-color);
        }
    }
`;
