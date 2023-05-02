import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, layout } from '@/styles/Mixins';

export const NotFoundPageContentContainer = styled.main`
    ${layout.standard.default}
    text-align:center;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-tertiary-100);
    padding-block: 6rem;
    ${media.md} {
        padding-block: 10rem;
    }
`;

export const NotFoundPageTitle = styled.h1`
    font-weight: 800;
    font-size: var(--fs-3xl);
    line-height: 1;
`;

export const NotFoundPageSubTitle = styled.h2`
    font-size: var(--fs-xl);
    font-weight: 800;
    text-transform: capitalize;
`;

export const NotFoundPageDescription = styled.p`
    font-size: var(--fs-md);
    font-weight: 500;
    margin-top: 1rem;
`;

export const NotFoundPageLink = styled(Link)`
    color: var(--color-tertiary-100);
    font-weight: 700;
    text-transform: uppercase;
    font-size: var(--fs-lg);
    margin-top: 2rem;
    ${media.md} {
        margin-top: 3rem;
    }
`;
