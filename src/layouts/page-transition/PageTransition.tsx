import {
    PageTransitionContainer,
    PageTransitionAnimatedLogo,
    PageTransitionAnimatedLogoContainer,
} from './PageTransition.styles';
import pageTransitionConfig from './PageTransition.config';
import usePageTransition from '@/contexts/page-transition-context/usePageTransition';
import { PageTransitionState } from '@/contexts/page-transition-context/PageTransitionContext.types';

const {
    entryDurationMs,
    containerAnimationDurationMs,
    logoAnimationDurationMs,
    exitDurationMs,
} = pageTransitionConfig;

const PageTransition: React.FC = () => {
    const { transitionState } = usePageTransition();

    if (transitionState === PageTransitionState.INACTIVE) return null;

    return (
        <PageTransitionContainer
            transitionState={transitionState}
            entryDurationMs={entryDurationMs}
            exitDurationMs={exitDurationMs}
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
