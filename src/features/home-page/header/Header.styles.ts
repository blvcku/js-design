import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding-inline: 1rem;
    position: relative;
    overflow: hidden;
`;

export const HeaderContentContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    max-width: 1250px;
    margin-inline: auto;
    h1,
    h2,
    h3 {
        text-transform: uppercase;
        text-align: center;
    }
    h1,
    h3 {
        font-size: var(--fs-3xl);
        font-weight: 800;
    }
    h1 {
        grid-area: h1;
    }
    h2 {
        grid-area: h2;
        font-size: var(--fs-lg);
        font-weight: 600;
    }
    h3 {
        grid-area: h3;
        order: 2;
    }

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
            "h1 img socials"
            "h2 img h3";
        h1,
        h2,
        h3 {
            text-align: start;
            & > span {
                display: block;
            }
        }
        h2,
        h3 {
            align-self: end;
            margin-bottom: 2rem;
        }
        h1 {
            margin-top: 8rem;
        }
    }

    @media (min-width: 1050px) {
        h2,
        h3 {
            margin-bottom: 6rem;
        }
    }
`;

export const HeaderImageWrapper = styled.div`
    grid-area: img;
    order: 1;
    margin-top: 2.5rem;
    @media (min-width: 1000px) {
        margin-top: 0;
    }
`;
