import { PageTransitionConfig } from './PageTransition.types';

const containerAnimationDurationMs = 700;
const logoAnimationDurationMs = 800;

const pageTransitionConfig: PageTransitionConfig = {
    entryDurationMs: 800,
    containerAnimationDurationMs,
    logoAnimationDurationMs,
    animationDurationMs: containerAnimationDurationMs + logoAnimationDurationMs,
    exitDurationMs: 1500,
};

export default pageTransitionConfig;
