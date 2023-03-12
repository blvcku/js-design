import styled from 'styled-components';

export const AboutBadgesContainer = styled.ul`
    margin-top: 8rem;
    max-width: 1250px;
    margin-inline: auto;
    display: none;
    justify-content: space-between;
    gap: 2rem;
    flex-direction: row;
    align-items: stretch;
    @media (min-width: 1050px) {
        display: flex;
    }
`;

export const AboutBadge = styled.li`
    background: var(--color-secondary-300);
    border: 15px solid var(--color-primary-200);
    border-radius: 15px;
    box-shadow: var(--shadow-2);
    padding: 5rem 1rem;
    max-width: 315px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    &:nth-of-type(1) {
        border-radius: 45px 15px 15px 45px;
    }
    &:nth-of-type(3) {
        border-radius: 15px 45px 45px 15px;
    }
    & > h2 {
        font-size: var(--fs-md);
        font-weight: 700;
        text-transform: capitalize;
        max-width: 15ch;
        margin-inline: auto;
        span {
            font-size: var(--fs-3xl);
            line-height: 1;
            display: block;
            margin-bottom: 1rem;
        }
    }
    & > svg {
        width: 3rem;
        height: auto;
    }
`;
