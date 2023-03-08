import styled from "styled-components";

export const HeaderLinksContainer = styled.ul`
    margin-top: 8rem;
    grid-area: socials;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
    svg {
        width: 3.8rem;
        height: auto;
        display: block;
        color: var(--color-secondary-300);
    }
    @media (min-width: 1000px) {
        display: flex;
    }
`;
