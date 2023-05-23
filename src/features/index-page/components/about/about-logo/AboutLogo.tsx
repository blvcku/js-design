import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { AboutLogoContainer, AboutLogoAnimatedLogo } from './AboutLogo.styles';
import aboutLogoConfig from './AboutLogo.config';

const {
    containerAnimationDurationMs,
    logoAnimationDurationMs,
    observerOptions,
} = aboutLogoConfig;

const AboutLogo: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver(observerOptions);

    return (
        <AboutLogoContainer
            toggleAnimation={isVisible}
            animationDurationMs={containerAnimationDurationMs}
            ref={elementRef}
        >
            <AboutLogoAnimatedLogo
                toggleAnimation={isVisible}
                animationDurationMs={logoAnimationDurationMs}
                animationDelayMs={containerAnimationDurationMs}
            />
        </AboutLogoContainer>
    );
};

export default AboutLogo;
