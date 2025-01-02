import { MediaCategoryModel, MediaModel } from "src/redux/models/media"

export type MediaSectionProps = {
    categoriesTitle: string
    categories: MediaCategoryModel[]
    media: MediaModel[]
    onMediaClick: (id: number) => void
    onShowMore: () => Promise<void>
}