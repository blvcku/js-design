import { PageTransitionState } from '@/contexts/page-transition-context/PageTransitionContext.types';

export interface PageTransitionContainerProps {
    entryDurationMs: number;
    exitDurationMs: number;
    transitionState: PageTransitionState;
}
