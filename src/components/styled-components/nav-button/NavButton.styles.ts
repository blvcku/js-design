import styled, { css } from 'styled-components';
import type { NavButtonContainerProps } from './NavButton.types';

export const NavButtonActiveIndicator = styled.span`
    width: var(--button-indicator-size);
    height: auto;
    aspect-ratio: 1/1;
    display: block;
    margin-inline: auto;
    background-color: var(--color-tertiary-100);
    border-radius: 50%;
    margin-top: var(--button-indicator-spacing);
    transform: scale(0);
    transition: transform var(--button-indicator-disappear-time) ease;
`;

export const NavButtonContainer = styled.button<NavButtonContainerProps>`
    --button-font-size: var(--fs-base);
    --button-padding-inline: 1rem;
    --button-padding-vertical: 1rem;
    --button-indicator-size: 0.5rem;
    --button-indicator-spacing: 0.2rem;
    --button-indicator-disappear-time: 0.2s;
    font-size: var(--button-font-size);
    font-weight: 500;
    text-transform: uppercase;
    padding-inline: var(--button-padding-inline);
    padding-top: var(--button-padding-vertical);
    padding-bottom: calc(
        var(--button-padding-vertical) - var(--button-indicator-size) -
            var(--button-indicator-spacing)
    );
    background: none;
    border: none;
    transition: font-weight 0.1s ease;
    ${({ active }) =>
        active
            ? css`
                  font-weight: 700;
                  ${NavButtonActiveIndicator} {
                      transform: scale(100%);
                      transition: transform
                          var(--button-indicator-disappear-time)
                          cubic-bezier(0, 1.32, 0.67, 1.9)
                          var(--button-indicator-disappear-time);
                  }
              `
            : null}
`;
