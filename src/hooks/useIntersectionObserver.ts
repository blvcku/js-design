import { useState, useRef, useCallback } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef<IntersectionObserver>();
    const elementRef = useCallback(
        (ref: HTMLElement | null) => {
            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    return observer.current?.disconnect();
                }
            }, options);
            if (ref) observer.current.observe(ref);
        },
        [options],
    );

    return { elementRef, isVisible };
};

export default useIntersectionObserver;
