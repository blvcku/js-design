import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const ContactContainer = styled.section`
    ${layout.standard.default}
    scroll-margin-top: 7rem;
    margin-top: 4rem;
    gap: 3rem;
    ${media.lg} {
        margin-top: 7rem;
        display: grid;
        grid-template-columns: 1fr 1.3fr;
    }
`;

export const ContactFormContainer = styled.div``;

export const ContactHeading = styled.h2`
    font-size: var(--fs-2xl);
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    ${media.lg} {
        text-align: start;
    }
`;

export const ContactSubHeading = styled.h3`
    font-size: var(--fs-md);
    font-weight: 500;
    margin-top: 2rem;
    text-align: center;
    ${media.lg} {
        text-align: start;
    }
`;

export const ContactImageContainer = styled.div`
    display: none;
    ${media.lg} {
        display: block;
    }
`;
