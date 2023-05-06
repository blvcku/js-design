import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { AboutLogoContainer, AboutLogoAnimatedLogo } from './AboutLogo.styles';

const AboutLogo: React.FC = () => {
    const { elementRef, isVisible } = useIntersectionObserver({
        threshold: 1,
        rootMargin: `-20%`,
    });
    const containerAnimationDurationMs = 700;

    return (
        <AboutLogoContainer
            toggleAnimation={isVisible}
            durationMs={containerAnimationDurationMs}
            ref={elementRef}
        >
            <AboutLogoAnimatedLogo
                toggleAnimation={isVisible}
                durationMs={800}
                delayMs={containerAnimationDurationMs}
            />
        </AboutLogoContainer>
    );
};

export default AboutLogo;
