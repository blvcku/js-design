import type { PageTransitionConfig } from './PageTransition.types';

const containerAnimationDurationMs = 700;
const logoAnimationDurationMs = 800;

const pageTransitionConfig: PageTransitionConfig = {
    entryDurationMs: 800,
    containerAnimationDurationMs,
    logoAnimationDurationMs,
    animationDurationMs: containerAnimationDurationMs + logoAnimationDurationMs,
    exitDurationMs: 1000,
};

export default pageTransitionConfig;
