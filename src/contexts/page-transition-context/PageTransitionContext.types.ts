export enum PageTransitionState {
    INACTIVE,
    ENTRY,
    EXIT,
}

export type PageTransitionStartFunction = (
    destination: string,
    timings: {
        entryDurationMs: number;
        animationDurationMs: number;
        exitDurationMs: number;
    },
) => void;

export interface PageTransitionContextData {
    transitionState: PageTransitionState;
    startTransition: PageTransitionStartFunction;
}
