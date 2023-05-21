import { PageTransitionContainer } from './PageTransition.styles';
import pageTransitionConfig from './PageTransition.config';
import usePageTransition from '@/contexts/page-transition-context/usePageTransition';
import { PageTransitionState } from '@/contexts/page-transition-context/PageTransitionContext.types';
import AnimatedLogo from '@/components/styled-components/animated-logo/AnimatedLogo';

const { entryDurationMs, animationDurationMs, exitDurationMs } =
    pageTransitionConfig;

const PageTransition: React.FC = () => {
    const { transitionState } = usePageTransition();

    if (transitionState === PageTransitionState.INACTIVE) return null;

    return (
        <PageTransitionContainer
            transitionState={transitionState}
            entryDurationMs={entryDurationMs}
            exitDurationMs={exitDurationMs}
        >
            <AnimatedLogo
                toggleAnimation={true}
                delayMs={entryDurationMs}
                durationMs={animationDurationMs}
            />
        </PageTransitionContainer>
    );
};

export default PageTransition;
