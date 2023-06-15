import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import type {
    PageTransitionContextData,
    PageTransitionStartFunction,
} from './PageTransitionContext.types';
import { PageTransitionState } from './PageTransitionContext.types';

export const PageTransitionContext = React.createContext<
    PageTransitionContextData | undefined
>(undefined);

const PageTransitionProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [
        { entryDurationMs, animationDurationMs, exitDurationMs },
        setTransitionTimings,
    ] = useState({
        entryDurationMs: 0,
        animationDurationMs: 0,
        exitDurationMs: 0,
    });
    const [transitionState, setTransitionState] = useState(
        PageTransitionState.INACTIVE,
    );

    useEffect(() => {
        if (transitionState === PageTransitionState.INACTIVE) return;
        let timeout: NodeJS.Timeout | undefined;
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
    }, [transitionState, entryDurationMs, animationDurationMs, exitDurationMs]);

    const startTransition: PageTransitionStartFunction = (
        destination,
        timings,
    ) => {
        setTransitionTimings(timings);
        setTransitionState(PageTransitionState.ENTRY);
        setTimeout(() => {
            navigate(destination);
        }, timings.entryDurationMs);
    };

    const value = { transitionState, startTransition };

    return (
        <PageTransitionContext.Provider value={value}>
            {children}
        </PageTransitionContext.Provider>
    );
};

export default PageTransitionProvider;
