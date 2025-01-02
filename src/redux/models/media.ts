export interface MediaCategoryModel {
    id: number
    name: string
}

export interface MediaPhotoImageModel {
    id: number
    image: string
}


export enum MediaType {
    NORM = 0,
    METHODIC = 1,
    STUDY = 2,
    PRESENTATION = 3,
    PHOTO = 4,
    VIDEO = 5
}


export interface MediaModel {
    id: number
    name: string
    description?: string
    category?: MediaCategoryModel
    image: string
    link: string
    type: MediaType
    
    // Для типа Фото
    photoImages?: MediaPhotoImageModel[]
}