import { MediaCategoryModel, MediaModel } from "src/redux/models/media"

export type MediaSectionProps = {
    categoriesTitle: string
    categories: MediaCategoryModel[]
    media: MediaModel[]
    onShowMore: () => Promise<void>
}