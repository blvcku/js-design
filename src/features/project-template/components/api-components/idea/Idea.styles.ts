import styled from 'styled-components';
import { IdeaContainerProps } from './Idea.types';
import isNumber from '@/helpers/isNumber';
import { media, pixelsToRem } from '@/styles/Mixins';

export const IdeaContainer = styled.div<IdeaContainerProps>`
    margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `4rem`};
    color: var(--color-secondary-200);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    svg {
        max-width: 4rem;
        width: 100%;
        height: auto;
    }
    img {
        zoom: 50%;
    }
    ${media.custom(450)} {
        gap: 3.5rem;
        svg {
            max-width: 4.5rem;
        }
        img {
            zoom: 75%;
        }
    }
    ${media.custom(700)} {
        flex-direction: row;
        padding-inline: 10%;
        gap: 8%;
        svg {
            max-width: 8%;
        }
        img {
            min-width: 0;
            zoom: 100%;
        }
    }
`;
