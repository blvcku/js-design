import { RefObject, useEffect } from 'react';

const useClickOutside = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: (event: MouseEvent) => void,
) => {
    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            if (
                !ref.current ||
                (e.target instanceof HTMLElement &&
                    ref.current.contains(e.target))
            )
                return;
            return callback(e);
        };
        document.addEventListener(`mousedown`, clickHandler);
        return () => {
            document.removeEventListener(`mousedown`, clickHandler);
        };
    }, [ref, callback]);
};

export default useClickOutside;
