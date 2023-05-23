export interface AnimatedLogoPathElementProps
    extends React.SVGAttributes<SVGPathElement> {
    animationDurationMs: number;
    animationDelayMs: number;
    toggleAnimation: boolean;
    pathLength: number;
}

export type AnimatedLogoPathProps = Omit<
    AnimatedLogoPathElementProps,
    `pathLength`
>;
