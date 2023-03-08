import styled from "styled-components";
import { NavButtonContainerProps } from "./NavButton.types";

export const NavButtonContainer = styled.button<NavButtonContainerProps>`
    --indicator-size: 0.5rem;
    --indicator-spacing: 0.2rem;
    --indicator-disappear-time: 0.2s;
    font-size: var(--fs-md);
    font-weight: 500;
    text-transform: uppercase;
    padding: 1rem;
    padding-bottom: calc(
        1rem - var(--indicator-size) - var(--indicator-spacing)
    );
    background: none;
    border: none;
    transition: font-weight 0.1s ease;
    span[data-active-indicator="true"] {
        width: var(--indicator-size);
        height: auto;
        aspect-ratio: 1/1;
        display: block;
        margin-inline: auto;
        background-color: var(--color-tertiary-100);
        border-radius: 50%;
        margin-top: var(--indicator-spacing);
        transform: scale(0);
        transition: transform var(--indicator-disappear-time) ease;
    }
    ${({ active }) =>
        active &&
        `
            font-weight:700;
            span[data-active-indicator='true']{
                transform:scale(100%);
                transition: transform .2s cubic-bezier(0,1.32,.67,1.9) var(--indicator-disappear-time);
            }
        `}
`;
