import styled from 'styled-components';

export const NavigationCollapseButtonContainer = styled.button`
    width: 2.2rem;
    height: auto;
    aspect-ratio: 1/1;
    background: none;
    border: none;
    gap: 1rem;
    position: relative;
`;

export const NavigationCollapseButtonLine = styled.span`
    position: absolute;
    background: var(--color-primary-200);
    width: 100%;
    height: 4px;
    top: 50%;
    left: 0;
    &:nth-child(1) {
        transform: translateY(-50%) rotate(45deg);
    }
    &:nth-child(2) {
        transform: translateY(-50%) rotate(-45deg);
    }
`;
