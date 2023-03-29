import styled from 'styled-components';

export const ContactContainer = styled.section`
    margin-top: 4rem;
    padding-inline: 1rem;
    max-width: calc(1250px + 2rem);
    margin-inline: auto;
    gap: 3rem;
    h2 {
        font-size: var(--fs-2xl);
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
    }
    h3 {
        font-size: var(--fs-lg);
        font-weight: 500;
        margin-top: 2rem;
        text-align: center;
    }
    & > div:nth-child(2) {
        display: none;
    }
    @media (min-width: 1050px) {
        margin-top: 7rem;
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        h2,
        h3 {
            text-align: start;
        }
        & > div:nth-child(2) {
            display: block;
        }
    }
`;
