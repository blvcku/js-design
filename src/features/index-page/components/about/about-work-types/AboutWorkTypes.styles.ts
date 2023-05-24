import styled from 'styled-components';
import { media, layout } from '@/styles/mixins-temp';

export const AboutWorkTypesContainer = styled.section`
    ${layout.standard.default}
    margin-top: 3rem;
    scroll-margin-top: 3rem;
    ${media.lg} {
        margin-top: 5rem;
    }
`;

export const AboutWorkTypesHeading = styled.h2`
    text-transform: uppercase;
    font-size: var(--fs-xl);
    font-weight: 900;
    text-align: center;
    ${media.lg} {
        text-align: start;
    }
`;

export const AboutWorkTypesList = styled.ul`
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;
    gap: 4rem;
    flex-direction: column;
    ${media.lg} {
        margin-top: 5rem;
        flex-direction: row;
        gap: 2rem;
    }
`;

export const AboutWorkType = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

export const AboutWorkTypeHeading = styled.h3`
    font-weight: 500;
    font-size: var(--fs-lg);
    text-transform: uppercase;
    text-align: center;
`;

export const AboutWorkTypeIcon = styled.svg`
    width: 7.5rem;
    height: auto;
`;
