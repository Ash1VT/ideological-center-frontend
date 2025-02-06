export interface PaginatedModel<T> {
    page: number
    perPage: number
    numberOfPages: number
    totalCount: number
    totalFilteredCount: number
    items: T[]
}