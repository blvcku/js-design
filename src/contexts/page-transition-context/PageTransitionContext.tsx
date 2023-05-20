import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import {
    PageTransitionContextData,
    PageTransitionProviderProps,
    PageTransitionState,
} from './PageTransitionContext.types';
import pageTransitionConfig from '@/layouts/page-transition/PageTransition.config';

const { entryDurationMs, animationDurationMs, exitDurationMs } =
    pageTransitionConfig;

export const PageTransitionContext = React.createContext<
    PageTransitionContextData | undefined
>(undefined);

const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
    children,
}) => {
    const [transitionState, setTransitionState] = useState(
        PageTransitionState.INACTIVE,
    );

    useEffect(() => {
        if (transitionState === PageTransitionState.INACTIVE) return;
        let timeout: NodeJS.Timeout;
        switch (transitionState) {
            case PageTransitionState.ENTRY:
                timeout = setTimeout(() => {
                    setTransitionState(PageTransitionState.EXIT);
                }, entryDurationMs + animationDurationMs);
                break;
            case PageTransitionState.EXIT:
                timeout = setTimeout(() => {
                    setTransitionState(PageTransitionState.INACTIVE);
                }, exitDurationMs);
                break;
        }
        return () => clearTimeout(timeout);
    }, [transitionState]);

    const startTransition = (destination: string) => {
        setTransitionState(PageTransitionState.ENTRY);
        setTimeout(() => {
            navigate(destination);
        }, entryDurationMs);
    };

    const value = { transitionState, startTransition };

    return (
        <PageTransitionContext.Provider value={value}>
            {children}
        </PageTransitionContext.Provider>
    );
};

export default PageTransitionProvider;
