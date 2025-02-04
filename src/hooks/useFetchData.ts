import { useState, useEffect } from "react";

interface FetchState<T> {
    isLoading: boolean;
    data: T;
    refetch: () => Promise<void>;
    fetchAdditional?: () => Promise<void>;
}

const useFetchData = <T,>(
    fetch: () => Promise<T>,
    dependencies: React.DependencyList,
    options?: {
        isArrayData?: boolean; 
    }
): FetchState<T> => {
    const { isArrayData = false } = options || {};
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<T>(isArrayData ? ([] as unknown as T) : undefined as unknown as T);

    const fetchData = async (merge = false) => {
        setIsLoading(true);
        const newData = await fetch();
        setData((prev) =>
        merge && Array.isArray(prev) && Array.isArray(newData) ? ([...prev, ...newData] as T) : newData
        );
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    const refetch = async () => fetchData();
    const fetchAdditional = isArrayData ? async () => fetchData(true) : undefined;

    return { isLoading, data, refetch, fetchAdditional };
};

export default useFetchData;