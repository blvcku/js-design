export type AnimatedLogoContainerProps = React.SVGAttributes<SVGElement>;

export interface AnimatedLogoProps extends AnimatedLogoContainerProps {
    toggleAnimation: boolean;
    durationMs: number;
    delayMs: number;
}

export interface AnimatedLogoPathObject
    extends React.SVGAttributes<SVGPathElement> {
    durationPercentage: number;
}

export type AnimatedLogoPathObjects = AnimatedLogoPathObject[];
