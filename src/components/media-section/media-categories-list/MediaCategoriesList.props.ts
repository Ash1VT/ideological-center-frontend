import { MediaCategoryModel } from "src/models/media"

export type MediaCategoriesProps = {
    categories: MediaCategoryModel[]
    selectedCategoryId?: number
    onMediaCategoryClick: (id: number) => Promise<void>
}