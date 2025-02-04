import { MediaCategoryModel } from "src/models/media"

export type MediaCategoryProps = {
    category: MediaCategoryModel
    isCategorySelected: boolean
    onMediaCategoryClick: () => Promise<void>
}