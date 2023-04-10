import styled from 'styled-components';

export const ProjectContainer = styled.li`
    & > a {
        box-shadow: var(--shadow-3);
        display: block;
        border-radius: 15px;
        overflow: hidden;
        border: 2px solid var(--color-secondary-400);
        div {
            transform: scale(1);
            transition: transform 0.2s ease;
        }
        img {
            aspect-ratio: 1/1;
        }
        &:hover {
            div {
                transform: scale(1.06);
            }
        }
    }
`;
