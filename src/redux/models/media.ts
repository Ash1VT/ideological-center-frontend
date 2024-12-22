export interface MediaCategoryModel {
    id: number
    name: string
}

export interface MediaModel {
    id: number
    name: string
    description?: string
    category?: MediaCategoryModel
    image: string
    link: string
}