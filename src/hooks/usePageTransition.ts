import { useContext } from 'react';
import { PageTransitionContext } from '@/contexts/page-transition-context/PageTransitionContext';

const usePageTransition = () => {
    const context = useContext(PageTransitionContext);
    if (context === undefined)
        throw new Error(
            `usePageTransition must be within PageTransitionProvider`,
        );
    return context;
};

export default usePageTransition;
