import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import { navigate } from 'gatsby';
import usePageTransition from './usePageTransition';
import PageTransitionProvider from './PageTransitionContext';
import { PageTransitionState } from './PageTransitionContext.types';
import expectToThrow from '@/__tests__/utils/expectToThrow';

describe(`PageTransition context`, () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe(`usePageTransition hook`, () => {
        it(`returns correct data when used within PageTransitionProvider`, () => {
            const { result } = renderHook(() => usePageTransition(), {
                wrapper: PageTransitionProvider,
            });
            const { transitionState, startTransition } = result.current;

            expect(transitionState).toEqual(PageTransitionState.INACTIVE);
            expect(startTransition).toEqual(expect.any(Function));
        });

        it(`throws error when used outside of PageTransitionProvider`, () => {
            expectToThrow(
                () => renderHook(() => usePageTransition()),
                Error(
                    `usePageTransition must be within PageTransitionProvider`,
                ),
            );
        });
    });

    test(`transition state updates correctly during the transition and user is navigated in the right time`, () => {
        const { result } = renderHook(() => usePageTransition(), {
            wrapper: PageTransitionProvider,
        });
        const destination = `/test`;
        const timings = {
            entryDurationMs: 100,
            animationDurationMs: 200,
            exitDurationMs: 300,
        };

        expect(navigate).not.toHaveBeenCalled();
        expect(result.current.transitionState).toEqual(
            PageTransitionState.INACTIVE,
        );

        act(() => {
            result.current.startTransition(destination, timings);
        });

        expect(result.current.transitionState).toEqual(
            PageTransitionState.ENTRY,
        );

        vi.advanceTimersByTime(timings.entryDurationMs);

        expect(navigate).toHaveBeenCalledWith(destination);

        act(() => {
            vi.advanceTimersByTime(timings.animationDurationMs);
        });

        expect(result.current.transitionState).toEqual(
            PageTransitionState.EXIT,
        );

        act(() => {
            vi.advanceTimersByTime(timings.exitDurationMs);
        });

        expect(result.current.transitionState).toEqual(
            PageTransitionState.INACTIVE,
        );
        // test if navigate was called only once
        expect(navigate).toHaveBeenCalledTimes(1);
    });
});
