import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

const useBlockWidth = <T extends HTMLElement>() => {
    const blockRef = useRef<T>(null);
    const [blockWidth, setBlockWidth] = useState<number>(0);
    
    const updateBlockWidth = useCallback(() => {
        if (blockRef.current) {
            setBlockWidth(blockRef.current.offsetWidth);
        }
    }, []);


    useLayoutEffect(() => {
        updateBlockWidth();
    }, [updateBlockWidth]);

    return {blockWidth, blockRef}
}

export default useBlockWidth
