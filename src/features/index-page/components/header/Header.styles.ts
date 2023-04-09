import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const HeaderContainer = styled.header`
    ${layout.standard.default}
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
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

    ${media.lg} {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
            'h1 img socials'
            'h2 img h3';
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
            margin-bottom: 6rem;
        }
        h1 {
            margin-top: 8rem;
        }
    }
`;

export const HeaderImageWrapper = styled.div`
    grid-area: img;
    order: 1;
    margin-top: 2.5rem;
    ${media.lg} {
        margin-top: 0;
    }
`;
