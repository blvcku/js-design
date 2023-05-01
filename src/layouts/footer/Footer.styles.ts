import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const FooterContainer = styled.footer`
    color: var(--color-primary-200);
    & > svg {
        color: var(--color-secondary-100);
        display: block;
    }
`;

export const FooterContentWrapper = styled.div`
    background-color: var(--color-secondary-100);
`;

export const FooterContentContainer = styled.div`
    ${layout.standard.viewportResponsive}
    background-color: var(--color-secondary-100);
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    display: grid;
    ${media.md} {
        padding-top: 0;
        grid-template-columns: 1fr 1fr;
    }
`;

export const FooterCopyright = styled.p`
    font-size: var(--fs-sm);
    text-align: center;
    margin-top: 2rem;
    ${media.md} {
        grid-column: span 2;
    }
`;
