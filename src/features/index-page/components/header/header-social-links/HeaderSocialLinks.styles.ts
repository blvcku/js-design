import styled from 'styled-components';
import { media } from '@/styles/Mixins';

export const HeaderSocialLinksContainer = styled.ul`
    margin-top: 8rem;
    grid-area: socials;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
    svg {
        width: 3.8rem;
        height: auto;
        display: block;
        color: var(--color-secondary-400);
    }
    ${media.lg} {
        display: flex;
    }
`;
