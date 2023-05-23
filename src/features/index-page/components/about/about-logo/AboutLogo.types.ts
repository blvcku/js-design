export interface AboutLogoContainerProps {
    animationDurationMs: number;
    toggleAnimation: boolean;
}

export interface AboutLogoConfig {
    containerAnimationDurationMs: number;
    logoAnimationDurationMs: number;
    observerOptions: IntersectionObserverInit;
}
