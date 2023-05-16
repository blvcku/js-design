import {
    ProgressBarWrapper,
    ProgressBarContainer,
    ProgressBarIndicatorsContainer,
    ProgressBarIndicator,
} from './ProgressBar.styles';
import { ProgressBarProps } from './ProgressBar.types';

const ProgressBar: React.FC<ProgressBarProps> = ({
    currentPage,
    numberOfPages,
}) => {
    const steps = Array.from(Array(numberOfPages).keys());

    return (
        <ProgressBarWrapper>
            <ProgressBarContainer
                currentPage={currentPage}
                numberOfPages={numberOfPages}
            />
            <ProgressBarIndicatorsContainer>
                {steps.map((step) => (
                    <ProgressBarIndicator
                        aria-current={currentPage === step ? `step` : false}
                        key={step}
                    >
                        {step + 1}
                    </ProgressBarIndicator>
                ))}
            </ProgressBarIndicatorsContainer>
        </ProgressBarWrapper>
    );
};

export default ProgressBar;
