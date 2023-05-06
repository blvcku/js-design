import { AnimatedLogoContainer } from './AnimatedLogo.styles';
import {
    AnimatedLogoProps,
    AnimatedLogoPathObjects,
} from './AnimatedLogo.types';
import AnimatedLogoPath from './animated-logo-path/AnimatedLogoPath';

const paths: AnimatedLogoPathObjects = [
    {
        fill: `none`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: 6,
        d: `m17.39,48.87C7.69,51.18.23,39.44,4,31.05c1.22-2.72,3.83-4.54,6.4-6.05,9.15-5.39,19.95-6.63,29.25-11.56,3.16-1.68,6.09-4.02,7.96-7.1.56-.92.98-2.24.19-2.97-.48-.44-1.24-.45-1.84-.18-2.61,1.2-4.39,5.67-5.44,8.12-1.42,3.29-2.32,6.8-2.81,10.35-.84,6.06-.49,12.22.31,18.28-.16-.42-.32-.84-.48-1.26`,
        durationPercentage: 0.25,
    },
    {
        fill: `none`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: 6,
        d: `m38.66,64.93c-3.22,11.65-2.98,25-12.38,34.02-4.1,3.93-10.28,3.89-14.75.55-2.72-2.03-4.63-5.02-5.79-8.21-3.3-9.12,2.22-17.51,8.64-23.61,4.77-4.53,9.83-9.29,15.73-12.52,4.25-2.33,9.38-4.17,14.29-3.81,5.7.42,9.41,5.18,13.1,8.96,7.17,7.35,17.15,11.07,27.26,11.83,5.05.38,10.15.06,15.13-.85,7.64-1.4,18.39-3.22,16.42-13.47-1.41-7.32-8.62-9.74-15.17-10.52-12.12-1.44-24.21-.96-36.07-4.31-2.77-.78-5.51-2.04-7.36-4.25-2.81-3.37-4.25-10.59-1.68-14.47,6.83-10.31,20.36-14.75,32.01-16.42,1.58-.23,2.73-.54,4.29-.87`,
        durationPercentage: 0.75,
    },
];

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
