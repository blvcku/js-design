import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const ProjectsContainer = styled.section`
    scroll-margin-top: 3rem;
    margin-top: 1rem;
`;

export const ProjectsHeadContainer = styled.div`
    ${layout.standard.default}
    gap: 1rem;
    display: flex;
    flex-direction: column;
    h2 {
        text-transform: uppercase;
        font-size: var(--fs-xl);
        font-weight: 900;
        text-align: center;
    }
    nav {
        display: flex;
        align-self: center;
        column-gap: 3rem;
        align-items: center;
        justify-content: center;
        row-gap: 0.5rem;
        flex-wrap: wrap;
    }
    ${media.md} {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        h2 {
            text-align: start;
        }
    }
    ${media.lg} {
        nav {
            column-gap: 5rem;
        }
    }
`;

export const ProjectsList = styled.ul`
    --projects-list-margin-top: 1.5rem;
    --projects-list-grid-columns: 1;
    --projects-list-grid-rows: auto;
    ${layout.standard.default}
    padding-inline: 15% !important;
    margin-top: var(--projects-list-margin-top);
    display: grid;
    grid-template-columns: repeat(var(--projects-list-grid-columns), 1fr);
    grid-template-rows: repeat(var(--projects-list-grid-rows), 1fr);
    gap: 0.5rem;
    position: relative;
    &:empty {
        aspect-ratio: var(--projects-list-grid-columns) / 1;
        &::before {
            content: 'No projects in this category yet!';
            position: absolute;
            width: 100%;
            left: 50%;
            text-align: center;
            top: calc(50% - var(--projects-list-margin-top));
            transform: translate(-50%, -50%);
            font-size: var(--fs-base);
        }
    }
    ${media.sm} {
        ${layout.standard.default}
        --projects-list-margin-top: 2rem;
        --projects-list-grid-columns: 2;
        padding-inline: 2rem !important;
    }
    ${media.md} {
        --projects-list-margin-top: 3rem;
        --projects-list-grid-columns: 3;
        --projects-list-grid-rows: 2;
        &:empty {
            aspect-ratio: var(--projects-list-grid-columns) /
                var(--projects-list-grid-rows);
        }
    }
`;
