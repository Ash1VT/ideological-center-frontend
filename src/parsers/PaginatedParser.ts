import { PaginatedModel } from "src/models/paginate";

export default class PageParser {
    public static parsePageToResponseData<T>(data: any, parsedItems: T[]): PaginatedModel<T> {
        return {
            page: data.page,
            perPage: data.per_page,
            numberOfPages: data.number_of_pages,
            totalCount: data.total_count,
            items: parsedItems
        }
    }
}