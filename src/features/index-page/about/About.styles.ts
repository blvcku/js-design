import styled from 'styled-components';

export const AboutContainer = styled.section``;

export const AboutContentContainer = styled.div`
    background: var(--color-secondary-100);
    color: var(--color-primary-200);
    padding: max(8vw, 3rem) 1rem;
    & > p {
        font-weight: 500;
        font-size: var(--fs-lg);
        max-width: 50ch;
        margin-inline: auto;
        text-align: center;
        &:nth-of-type(2) {
            font-weight: 600;
            max-width: 25ch;
            margin-top: 2rem;
            @media (min-width: 500px) {
                margin-top: 3.5rem;
            }
        }
    }
    @media (min-width: 1921px) {
        padding: 6vw;
    }
`;

export const AboutWaveContainer = styled.div`
    position: relative;
    & > svg {
        width: 100%;
        color: var(--color-secondary-100);
        display: block;
    }
`;

export const AboutAnimatedWaveContainer = styled.div`
    & > svg {
        color:var(--color-secondary-100);
    }
`;

export const AboutLogoContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary-200);
    box-shadow: var(--shadow-1);
    border-radius: 50%;
    padding: 1rem;
    bottom: -5vw;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
    & > svg {
        width: 5.5vw;
        height: auto;
        min-width: 3.5rem;
        color: var(--color-secondary-200);
    }
    @media (min-width: 450px) {
        bottom: -3vw;
    }
    @media (min-width: 900px) {
        padding: 2vw;
    }
`;
