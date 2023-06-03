import styled from 'styled-components';
import type { ProgressBarContainerProps } from './ProgressBar.types';

export const ProgressBarWrapper = styled.div`
    --progress-bar-horizontal-padding: 14%;
    --progress-bar-indicator-width: 2.8rem;
    --progress-bar-color: var(--color-secondary-400);
    position: relative;
    padding-inline: var(--progress-bar-horizontal-padding);
`;

export const ProgressBarContainer = styled.span<ProgressBarContainerProps>`
    position: absolute;
    width: 100%;
    background: var(--color-primary-100);
    outline: 1px solid var(--progress-bar-color);
    outline-offset: -1px;
    height: 1rem;
    border-radius: 15px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--progress-bar-color);
        left: -100%;
        top: 0;
        transition: transform 0.6s cubic-bezier(0.1, 0.67, 0.11, 0.9);
        transform: translateX(
            calc(
                ${({ currentPage, numberOfPages }) => {
                    // First page
                    if (!currentPage)
                        return `var(--progress-bar-indicator-width) / 2 + var(--progress-bar-horizontal-padding)`;
                    // Last page
                    if (currentPage === numberOfPages) return `100%`;
                    // Pages in between
                    const transformMultiplier =
                        currentPage / (numberOfPages - 1);
                    const beforeLastStep = currentPage === numberOfPages - 1;
                    return `
                    ${/* Get width of the bar without sides */ ``}
                    (100% - 2 * var(--progress-bar-horizontal-padding))
                    ${
                        /* Get percentage that should be displayed by
                    multiplying - cannot use x% because of css calc limitations */ ``
                    }
                    * ${transformMultiplier}
                    ${/* Add part that is before first step */ ``}
                    + var(--progress-bar-horizontal-padding)
                    ${
                        /* Prevent the bar from sticking out on the right side */ ``
                    }
                    ${
                        beforeLastStep
                            ? `- var(--progress-bar-indicator-width) / 2`
                            : ``
                    } 
                `;
                }}
            )
        );
    }
`;

export const ProgressBarIndicatorsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProgressBarIndicator = styled.div`
    box-shadow: var(--shadow-1);
    font-size: var(--fs-lg);
    background: var(--progress-bar-color);
    color: var(--color-primary-200);
    aspect-ratio: 1/1;
    width: var(--progress-bar-indicator-width);
    border-radius: 50%;
    display: grid;
    place-items: center;
`;
