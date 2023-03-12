import styled from 'styled-components';

export const FooterSocialLinksContainer = styled.div`
    & > h2{
        font-weight:600;
        font-size:var(--fs-lg);
        text-transform:uppercase;
    }
`;

export const FooterSocialLinksList = styled.ul`
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-top:1.25rem;
`;

export const FooterSocialLinkWrapper = styled.li`
    a {
        --font-size: var(--fs-base);
        width:max-content;
        gap:1rem;
        display: flex;
        align-items: center;
        color: inherit;
        font-size: var(--font-size);
        text-decoration: none;
        svg {
            width: calc(2 * var(--font-size));
        }
    }
`;
