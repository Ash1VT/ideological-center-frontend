export enum MediaType {
    METHODIC = 0,
    NORM = 1,
    STUDY = 2,
    PHOTO = 3,
    VIDEO = 4,
    PRESENTATION = 5,
}

export interface MediaCategoryModel {
    id: number
    name: string
    type: MediaType
}

export interface MediaPhotoModel {
    id: number
    imageUrl: string
    mediaId: number
}


export interface MediaModel {
    id: number
    name: string
    description?: string
    // category?: MediaCategoryModel
    imageUrl: string
    url: string
    type: MediaType
    categoryId?: number
    
    // Для типа Фото
    photos?: MediaPhotoModel[]
}