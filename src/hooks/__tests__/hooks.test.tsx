import {
    render,
    renderHook,
    act,
    type RenderHookResult,
} from '@testing-library/react';
import { vi } from 'vitest';
import { createRef } from 'react';
import useClickOutside from '../useClickOutside';
import useIntersectionObserver from '../useIntersectionObserver';

describe(`useClickOutside hook`, () => {
    const callback = vi.fn();
    const ref = createRef<HTMLDivElement>();
    let hook: RenderHookResult<
        unknown,
        { ref: typeof ref; callback: typeof callback }
    >;
    const clickEvent = new MouseEvent(`mousedown`, { bubbles: true });
    const addEventListenerMock = vi.spyOn(document, `addEventListener`);
    const removeEventListenerMock = vi.spyOn(document, `removeEventListener`);

    beforeEach(() => {
        addEventListenerMock.mockClear();
        removeEventListenerMock.mockClear();
        callback.mockClear();
        render(<div ref={ref}></div>);
        hook = renderHook(() => useClickOutside(ref, callback));
    });

    it(`creates event listener when initialized`, () => {
        expect(addEventListenerMock).toHaveBeenCalledWith(
            `mousedown`,
            expect.any(Function),
        );
    });

    test(`callback is called when clicking outside the element`, () => {
        // Simulate click
        document.dispatchEvent(clickEvent);

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(clickEvent);
    });

    test(`callback is not called when clicking on the element`, () => {
        // Simulate click
        ref.current?.dispatchEvent(clickEvent);

        expect(callback).not.toHaveBeenCalled();
    });

    it(`removes event listener when hook unmounts`, () => {
        expect(removeEventListenerMock).not.toHaveBeenCalled();

        hook.unmount();

        expect(removeEventListenerMock).toHaveBeenCalledWith(
            `mousedown`,
            expect.any(Function),
        );

        // Test if removing event listener worked
        document.dispatchEvent(clickEvent);

        expect(callback).not.toHaveBeenCalled();
    });
});

describe(`useIntersectionObserver hook`, () => {
    const intersectionObserverMockData = {
        disconnect: vi.fn(),
        observe: vi.fn(),
        takeRecords: vi.fn(),
        unobserve: vi.fn(),
        callback: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();

        // Mock intersection observer
        const intersectionObserverMock = vi.fn((callback) => {
            intersectionObserverMockData.callback = callback;
            return intersectionObserverMockData;
        });
        vi.stubGlobal(`IntersectionObserver`, intersectionObserverMock);
    });

    it(`observes the element when elementRef is called`, () => {
        const { result } = renderHook(() => useIntersectionObserver({}));
        const ref = createRef<HTMLDivElement>();
        render(<div ref={ref}></div>);
        result.current.elementRef(ref.current);

        expect(intersectionObserverMockData.observe).toHaveBeenCalledWith(
            ref.current,
        );
    });

    it(`updates the isVisible state when intersection occurs`, () => {
        const { result } = renderHook(() => useIntersectionObserver({}));
        render(<div ref={result.current.elementRef}></div>);

        expect(result.current.isVisible).toBe(false);

        // Simulate intersection event
        act(() => {
            const entry = { isIntersecting: true };
            intersectionObserverMockData.callback([entry]);
        });

        expect(result.current.isVisible).toBe(true);
    });

    it(`disconnects the observer when hook unmounts`, () => {
        const { result, unmount } = renderHook(() =>
            useIntersectionObserver({}),
        );
        render(<div ref={result.current.elementRef}></div>);

        expect(intersectionObserverMockData.disconnect).not.toHaveBeenCalled();
        unmount();
        expect(intersectionObserverMockData.disconnect).toHaveBeenCalled();
    });
});
