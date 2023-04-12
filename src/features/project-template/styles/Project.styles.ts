import styled from 'styled-components';
import { media, layout } from '@/styles/Mixins';

export const Main = styled.main`
    ${layout.standard.default}
    margin-bottom:1rem;
    padding-top: 1.6rem;
    ${media.sm} {
        margin-bottom: 0;
    }
    & > :first-child {
        margin-top: 0;
    }
`;
