export enum PageTransitionState {
    INACTIVE,
    ENTRY,
    EXIT,
}

export interface PageTransitionContextData {
    transitionState: PageTransitionState;
    startTransition: (destination: string) => void;
}

export interface PageTransitionProviderProps {
    children: React.ReactNode;
}
