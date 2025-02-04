import { useState } from "react";

const usePaginator = (pageNumber: number, itemsPerPage: number) => {
    const [page, setPage] = useState(pageNumber);
    const [perPage, setPerPage] = useState(itemsPerPage);

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    return {page, perPage, nextPage, prevPage}
}

export default usePaginator