import {
    PageTransitionContainer,
    PageTransitionAnimatedLogo,
    PageTransitionAnimatedLogoContainer,
} from './PageTransition.styles';
import pageTransitionConfig from './PageTransition.config';
import usePageTransition from '@/contexts/page-transition-context/usePageTransition';

const {
    entryDurationMs,
    containerAnimationDurationMs,
    logoAnimationDurationMs,
    exitDurationMs,
} = pageTransitionConfig;

const PageTransition: React.FC = () => {
    const { transitionState } = usePageTransition();

    return (
        <PageTransitionContainer
            transitionState={transitionState}
            entryDurationMs={entryDurationMs}
            exitDurationMs={exitDurationMs}
            data-testid="page-transition"
        >
            <PageTransitionAnimatedLogoContainer
                animationDurationMs={containerAnimationDurationMs}
                animationDelayMs={entryDurationMs}
                exitDurationMs={exitDurationMs}
                transitionState={transitionState}
            >
                <PageTransitionAnimatedLogo
                    toggleAnimation={true}
                    animationDelayMs={
                        entryDurationMs + containerAnimationDurationMs
                    }
                    animationDurationMs={logoAnimationDurationMs}
                />
            </PageTransitionAnimatedLogoContainer>
        </PageTransitionContainer>
    );
};

export default PageTransition;
