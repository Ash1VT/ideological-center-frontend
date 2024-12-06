import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

const useBlockSize = <T extends HTMLElement>() => {
    const blockRef = useRef<T>(null);
    const [blockWidth, setBlockWidth] = useState<number>(0);
    const [blockHeight, setBlockHeight] = useState<number>(0);

    const updateBlockSize = useCallback(() => {
        if (blockRef.current) {
            setBlockWidth(blockRef.current.offsetWidth);
            setBlockHeight(blockRef.current.offsetHeight);
        }
    }, []);

    useLayoutEffect(() => {
        updateBlockSize();
    }, [updateBlockSize]);

    return {blockWidth, blockHeight, blockRef}
}

export default useBlockSize
