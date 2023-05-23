import { AboutLogoConfig } from './AboutLogo.types';

const aboutLogoConfig: AboutLogoConfig = {
    containerAnimationDurationMs: 700,
    logoAnimationDurationMs: 800,
    observerOptions: {
        threshold: 1,
        rootMargin: `-20%`,
    },
};

export default aboutLogoConfig;
