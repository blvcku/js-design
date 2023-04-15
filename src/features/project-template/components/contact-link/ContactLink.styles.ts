import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@/styles/Mixins';

export const ContactLinkContainer = styled.section`
    padding-inline: 1rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 4.5rem;
    ${media.sm} {
        margin-top: 6rem;
    }
`;

export const ContactLinkHeader = styled.h2`
    font-size: var(--fs-3xl);
    font-weight: 800;
    margin-bottom: 1rem;
`;

export const ContactLinkElement = styled(Link)`
    font-size: var(--fs-lg);
    font-weight: 700;
    color: var(--color-tertiary-100);
`;
