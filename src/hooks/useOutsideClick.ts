import { useEffect, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(callback: (event: MouseEvent) => void) => {
    const ref = useRef<T | null>(null);
  
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
            callback(event);
            }
        };
    
        document.addEventListener('click', handleClick, true);
    
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [callback]);
  
    return ref;
};

export default useOutsideClick;