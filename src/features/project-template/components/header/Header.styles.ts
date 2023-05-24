import styled from 'styled-components';
import { media, layout } from '@/styles/mixins-temp';

export const HeaderContainer = styled.header`
    ${layout.standard.default}
    display: grid;
    margin-top: 1rem;
    ${media.md} {
        margin-top: 5rem;
    }
`;

export const HeaderImageWrapper = styled.div`
    overflow: hidden;
    box-shadow: var(--shadow-5);
    border: 2px solid var(--color-secondary-400);
    border-radius: 15px 15px 15px 45px;
    aspect-ratio: 1/1;
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.6rem;
    ${media.sm} {
        aspect-ratio: 4/3;
    }
    ${media.md} {
        border-radius: 15px;
        aspect-ratio: 164/75;
        margin-top: 0;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: var(--fs-2xl);
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    grid-row: 1;
    ${media.md} {
        margin-top: 6rem;
        grid-row: auto;
    }
`;
