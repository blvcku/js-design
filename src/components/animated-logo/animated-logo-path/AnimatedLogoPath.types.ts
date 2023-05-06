export interface AnimatedLogoPathElementProps
    extends React.SVGAttributes<SVGPathElement> {
    durationMs: number;
    delayMs: number;
    toggleAnimation: boolean;
    pathLength: number;
}

export type AnimatedLogoPathProps = Omit<
    AnimatedLogoPathElementProps,
    `pathLength`
>;
