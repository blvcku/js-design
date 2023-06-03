import type { PageTransitionState } from '@/contexts/page-transition-context/PageTransitionContext.types';

export interface PageTransitionConfig {
    entryDurationMs: number;
    containerAnimationDurationMs: number;
    logoAnimationDurationMs: number;
    animationDurationMs: number;
    exitDurationMs: number;
}

export interface PageTransitionContainerProps {
    entryDurationMs: number;
    exitDurationMs: number;
    transitionState: PageTransitionState;
}

export interface PageTransitionAnimatedLogoContainerProps {
    animationDurationMs: number;
    animationDelayMs: number;
    exitDurationMs: number;
    transitionState: PageTransitionState;
}
