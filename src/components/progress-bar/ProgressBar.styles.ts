import styled from 'styled-components';
import { ProgressBarContainerProps } from './ProgressBar.types';

export const ProgressBarWrapper = styled.div`
    --horizontal-padding: 14%;
    --indicator-width: 2.8rem;
    --bar-color: var(--color-secondary-300);
    position: relative;
    padding-inline: var(--horizontal-padding);
`;

export const ProgressBarContainer = styled.span<ProgressBarContainerProps>`
    position: absolute;
    width: 100%;
    background: var(--color-primary-100);
    outline: 1px solid var(--bar-color);
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
        background: var(--bar-color);
        left: -100%;
        top: 0;
        transition: transform 0.6s cubic-bezier(0.1, 0.67, 0.11, 0.9);
        transform: translateX(
            calc(
                ${({ currentPage, numberOfPages }) => {
                    // First page
                    if (!currentPage)
                        return 'var(--indicator-width) / 2 + var(--horizontal-padding)';
                    // Last page
                    if (currentPage === numberOfPages) return '100%';
                    // Pages in between
                    const transformMultiplier =
                        currentPage / (numberOfPages - 1);
                    const beforeLastStep = currentPage === numberOfPages - 1;
                    return `
                    ${/* Get width of the bar without sides */ ''}
                    (100% - 2 * var(--horizontal-padding))
                    ${
                        /* Get percentage that should be displayed by
                    multiplying - cannot use x% because of css calc limitations */ ''
                    }
                    * ${transformMultiplier}
                    ${/* Add part that is before first step */ ''} 
                    + var(--horizontal-padding)
                    ${
                        /* Prevent the bar from sticking out on the right side */ ''
                    }
                    ${beforeLastStep ? '- var(--indicator-width) / 2' : ''} 
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
    background: var(--bar-color);
    color: var(--color-primary-200);
    aspect-ratio: 1/1;
    width: var(--indicator-width);
    border-radius: 50%;
    display: grid;
    place-items: center;
`;
