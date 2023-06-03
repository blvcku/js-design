import { useState } from 'react';
import { AnimatedLogoPathElement } from './AnimatedLogoPath.styles';
import type { AnimatedLogoPathProps } from './AnimatedLogoPath.types';

const AnimatedLogoPath: React.FC<AnimatedLogoPathProps> = ({
    animationDurationMs,
    animationDelayMs,
    toggleAnimation,
    ...pathProps
}) => {
    const [pathLength, setPathLength] = useState(0);

    return (
        <AnimatedLogoPathElement
            animationDurationMs={animationDurationMs}
            animationDelayMs={animationDelayMs}
            toggleAnimation={toggleAnimation}
            pathLength={pathLength}
            ref={(ref) => {
                if (ref) setPathLength(ref.getTotalLength());
            }}
            {...pathProps}
        />
    );
};

export default AnimatedLogoPath;
