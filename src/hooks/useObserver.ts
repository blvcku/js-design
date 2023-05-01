import { useState, useRef, useCallback } from 'react';

const useObserver = (threshold: number | number[]) => {
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef<IntersectionObserver>();
    const element = useCallback(
        (element: HTMLElement | null) => {
            observer.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        return observer.current?.disconnect();
                    }
                },
                { threshold },
            );
            if (element) observer.current.observe(element);
        },
        [threshold],
    );

    return { element, isVisible };
};

export default useObserver;
