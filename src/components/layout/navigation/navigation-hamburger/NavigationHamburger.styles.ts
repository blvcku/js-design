import styled from 'styled-components';

export const NavigationHamburgerContainer = styled.button`
    border: 3px solid var(--color-tertiary-100);
    width: 3rem;
    border-radius: 10px;
    background: none;
`;

export const NavigationHamburgerWrapper = styled.span`
    diplay: block;
    padding: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const NavigationHamburgerLine = styled.span`
    width: 100%;
    height: 2px;
    background: var(--color-tertiary-100);
`;
