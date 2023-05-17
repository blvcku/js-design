import styled from 'styled-components';
import { media, layout } from '@/styles/mixins';

export const ProjectTemplateContentContainer = styled.main`
    margin-bottom: 1rem;
    margin-top: 1.6rem;
    ${media.sm} {
        margin-bottom: 0;
    }
`;

export const ProjectTemplateArticle = styled.article`
    ${layout.standard.default}
    & > :first-child {
        margin-top: 0;
    }
`;
