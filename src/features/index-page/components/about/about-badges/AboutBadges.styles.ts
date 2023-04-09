import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const AboutBadgesContainer = styled.ul`
    ${layout.standard.default}
    margin-top: 8rem;
    display: none;
    justify-content: space-between;
    gap: 2rem;
    flex-direction: row;
    align-items: stretch;
    ${media.lg} {
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
        font-size: var(--fs-base);
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
