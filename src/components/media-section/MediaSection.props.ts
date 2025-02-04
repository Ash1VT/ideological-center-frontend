import { MediaCategoryModel, MediaModel } from "src/models/media"

export type MediaSectionProps = {
    categoriesTitle: string
    categories: MediaCategoryModel[]
    selectedCategoryId?: number
    media: MediaModel[]
    showMoreButtonVisible: boolean
    searchValue: string
    isCategoriesLoading: boolean
    isMediaLoading: boolean
    onMediaCategoryClick: (id: number) => Promise<void>
    onMediaClick: (id: number) => Promise<void>
    onMediaSearch: (value: string) => Promise<void>
    onShowMore: () => Promise<void>
}