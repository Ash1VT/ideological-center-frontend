export const parseQueryParams = (params: Record<string, any>): string => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== undefined)
    );

    const searchParams = new URLSearchParams();

    // Handle arrays without indexing
    for (const [key, value] of Object.entries(filteredParams)) {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                searchParams.append(key, item);
            });
        } else {
            searchParams.append(key, value);
        }
    }

    return searchParams.toString();   
}