import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const ContactContainer = styled.section`
    ${layout.standard.default}
    scroll-margin-top: 7rem;
    margin-top: 4rem;
    gap: 3rem;
    h2 {
        font-size: var(--fs-2xl);
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
    }
    h3 {
        font-size: var(--fs-md);
        font-weight: 500;
        margin-top: 2rem;
        text-align: center;
    }
    & > div:nth-child(2) {
        display: none;
    }
    ${media.lg} {
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
