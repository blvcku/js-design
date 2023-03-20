import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 4rem;
    color: var(--color-primary-200);
    & > svg {
        color: var(--color-secondary-100);
        display: block;
    }
`;

export const FooterContentWrapper = styled.div`
    background-color: var(--color-secondary-100);
    padding-inline: 1rem;
`;

export const FooterContentContainer = styled.div`
    background-color: var(--color-secondary-100);
    max-width: max(calc(100vw) - 800px, 1250px);
    margin-inline: auto;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    display: grid;
    & > p {
        font-size: var(--fs-base);
        text-align: center;
        margin-top: 2rem;
    }
    @media (min-width: 800px) {
        padding-top: 0;
        grid-template-columns: 1fr 1fr;
        & > p {
            grid-column: span 2;
        }
    }
`;
