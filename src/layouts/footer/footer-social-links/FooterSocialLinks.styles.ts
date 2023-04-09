import styled from 'styled-components';
import { media } from '@/styles/Mixins';

export const FooterSocialLinksContainer = styled.div`
    grid-row: 2;
    & > h2 {
        font-weight: 600;
        font-size: var(--fs-md);
        text-transform: uppercase;
        display: none;
    }
    ${media.md} {
        grid-row: auto;
        & > h2 {
            display: block;
        }
    }
`;

export const FooterSocialLinksList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-inline: auto;
    width: max-content;
    ${media.md} {
        flex-direction: column;
        margin-top: 1.25rem;
        width: auto;
    }
`;

export const FooterSocialLinkWrapper = styled.li`
    a {
        --font-size: var(--fs-sm);
        width: max-content;
        gap: 1rem;
        display: flex;
        align-items: center;
        color: inherit;
        font-size: var(--font-size);
        text-decoration: none;
        svg {
            width: calc(2 * var(--font-size));
        }
        & > p {
            display: none;
        }
        ${media.md} {
            & > p {
                display: block;
            }
        }
    }
`;
