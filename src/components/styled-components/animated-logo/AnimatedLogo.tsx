import { AnimatedLogoContainer } from './AnimatedLogo.styles';
import { AnimatedLogoProps } from './AnimatedLogo.types';
import AnimatedLogoPath from './animated-logo-path/AnimatedLogoPath';
import paths from './AnimatedLogo.config';

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
    toggleAnimation,
    durationMs,
    delayMs,
    ...containerProps
}) => {
    const durationsMs = paths.map(
        ({ durationPercentage }) => durationMs * durationPercentage,
    );

    return (
        <AnimatedLogoContainer
            {...containerProps}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 119.54 104.95"
        >
            {paths.map((path, index) => (
                <AnimatedLogoPath
                    key={index}
                    {...path}
                    durationMs={durationsMs[index]}
                    delayMs={
                        delayMs +
                        durationsMs
                            .slice(0, index)
                            .reduce((acc, curr) => acc + curr, 0)
                    }
                    toggleAnimation={toggleAnimation}
                />
            ))}
        </AnimatedLogoContainer>
    );
};

export default AnimatedLogo;
