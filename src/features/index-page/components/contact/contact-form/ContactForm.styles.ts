import styled from 'styled-components';
import { media } from '@/styles/mixins-temp';

export const ContactFormContainer = styled.form`
    margin-top: 2rem;
    min-height: 22.7rem;
    display: flex;
    flex-direction: column;
    ${media.md} {
        padding-inline: 9%;
    }
`;
