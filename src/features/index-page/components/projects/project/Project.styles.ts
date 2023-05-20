import styled from 'styled-components';
import ImageRenderer from '@/components/unstyled-components/image-renderer/ImageRenderer';
import TransitionLink from '@/components/unstyled-components/transition-link/TransitionLink';

export const ProjectContainer = styled.li``;

export const ProjectImageContainer = styled.div`
    transform: scale(1);
    transition: transform 0.2s ease;
`;

export const ProjectTransitionLink = styled(TransitionLink)`
    box-shadow: var(--shadow-3);
    display: block;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid var(--color-secondary-400);
    &:hover {
        ${ProjectImageContainer} {
            transform: scale(1.06);
        }
    }
`;

export const ProjectImageRenderer = styled(ImageRenderer)`
    aspect-ratio: 1/1;
`;
