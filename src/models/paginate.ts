export interface PaginatedModel<T> {
    page: number
    perPage: number
    numberOfPages: number
    totalCount: number
    items: T[]
}