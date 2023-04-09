import styled from 'styled-components';
import { media } from '@/styles/Mixins';

export const AboutDescriptionContainer = styled.div`
    padding-inline: 1rem;
    & > p {
        font-weight: 500;
        font-size: var(--fs-lg);
        max-width: 50ch;
        margin-inline: auto;
        text-align: center;
        &:nth-of-type(2) {
            font-weight: 600;
            max-width: 25ch;
            margin-top: 2rem;
            ${media.sm} {
                margin-top: 3.5rem;
            }
        }
    }
`;
