import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const Main = styled.main`
    margin-bottom: 1rem;
    margin-top: 1.6rem;
    ${media.sm} {
        margin-bottom: 0;
    }
`;

export const Article = styled.article`
    ${layout.standard.default}
    & > :first-child {
        margin-top: 0;
    }
`;
