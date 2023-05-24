import styled from 'styled-components';
import { IdeaContainerProps } from './Idea.types';
import isNumber from '@/helpers/isNumber';
import { media, pixelsToRem } from '@/styles/mixins';
import ImageRenderer from '@/components/unstyled-components/image-renderer/ImageRenderer';

export const IdeaContainer = styled.section<IdeaContainerProps>`
    --idea-margin-top: ${({ marginTop }) =>
        isNumber(marginTop) ? pixelsToRem(marginTop) : `4rem`};
    margin-top: calc(var(--idea-margin-top) * 0.5);
    color: var(--color-secondary-200);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    ${media.sm} {
        margin-top: var(--idea-margin-top);
        gap: 4rem;
    }
    ${media.custom(700)} {
        flex-direction: row;
        padding-inline: 10%;
        gap: 8%;
    }
`;

export const IdeaIcon = styled.svg`
    max-width: 4rem;
    width: 100%;
    height: auto;
    ${media.sm} {
        max-width: 4.5rem;
    }
    ${media.custom(700)} {
        max-width: 8%;
    }
`;

export const IdeaImageRenderer = styled(ImageRenderer)`
    img {
        zoom: 50%;
        width: 100%;
    }
    ${media.sm} {
        img {
            zoom: 75%;
        }
    }
    ${media.custom(700)} {
        img {
            min-width: 0;
            zoom: 100%;
        }
    }
`;
