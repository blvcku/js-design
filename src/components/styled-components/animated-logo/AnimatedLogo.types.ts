export type AnimatedLogoContainerProps = React.SVGAttributes<SVGElement>;

export interface AnimatedLogoProps extends AnimatedLogoContainerProps {
    toggleAnimation: boolean;
    animationDurationMs: number;
    animationDelayMs: number;
}

export interface AnimatedLogoPathObject
    extends React.SVGAttributes<SVGPathElement> {
    animationDurationPercentage: number;
}

export type AnimatedLogoPathObjects = AnimatedLogoPathObject[];
