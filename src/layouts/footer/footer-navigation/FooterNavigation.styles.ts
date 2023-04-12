import styled from 'styled-components';
import { media } from '@/styles/Mixins';

export const FooterNavigationContainer = styled.nav`
    text-align: center;
    & > h2 {
        font-size: var(--fs-xl);
        font-weight: 600;
        text-transform: uppercase;
    }
    & > h3 {
        font-size: var(--fs-base);
        font-weight: 400;
    }
    ${media.custom(560)} {
        & > h2 {
            font-size: var(--fs-md);
        }
    }
    ${media.md} {
        text-align: end;
    }
`;

export const FooterNavigationLinksContainer = styled.ul`
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const FooterNavigationLinkWrapper = styled.li`
    & > a {
        color: inherit;
        text-transform: uppercase;
        text-decoration: none;
        font-size: var(--fs-sm);
    }
`;
