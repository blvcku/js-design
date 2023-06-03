export enum PageTransitionState {
    INACTIVE,
    ENTRY,
    EXIT,
}

export interface PageTransitionContextData {
    transitionState: PageTransitionState;
    startTransition: (destination: string) => void;
}
