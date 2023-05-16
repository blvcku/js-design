import { useState } from 'react';
import { AnimatedLogoPathElement } from './AnimatedLogoPath.styles';
import { AnimatedLogoPathProps } from './AnimatedLogoPath.types';

const AnimatedLogoPath: React.FC<AnimatedLogoPathProps> = ({
    durationMs,
    delayMs,
    toggleAnimation,
    ...pathProps
}) => {
    const [pathLength, setPathLength] = useState(0);

    return (
        <AnimatedLogoPathElement
            durationMs={durationMs}
            delayMs={delayMs}
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
