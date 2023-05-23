import { AnimatedLogoContainer } from './AnimatedLogo.styles';
import { AnimatedLogoProps } from './AnimatedLogo.types';
import AnimatedLogoPath from './animated-logo-path/AnimatedLogoPath';
import paths from './AnimatedLogo.config';

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
    toggleAnimation,
    animationDurationMs,
    animationDelayMs,
    ...containerProps
}) => {
    const animationDurationsMs = paths.map(
        ({ animationDurationPercentage }) =>
            animationDurationMs * animationDurationPercentage,
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
                    animationDurationMs={animationDurationsMs[index]}
                    animationDelayMs={
                        animationDelayMs +
                        animationDurationsMs
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
