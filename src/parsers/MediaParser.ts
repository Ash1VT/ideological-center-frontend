import { MediaCategoryModel, MediaModel, MediaPhotoModel } from "src/models/media"
import { PaginatedModel } from "src/models/paginate"
import PaginatedParser from "./PaginatedParser"

export default class MediaParser {
    public static parseMediaCategoryToResponseData(data: any): MediaCategoryModel {
        return {
            id: data.id,
            name: data.name,
            type: data.type
        }
    }
    
    public static parseMediaToResponseData(data: any): MediaModel {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            imageUrl: data.image_url,
            url: data.url,
            type: data.type,
            categoryId: data.category_id,
            photos: data.media_photos?.map((mediaPhoto: any) => this.parseMediaPhotoToResponseData(mediaPhoto))
        }
    }


    public static parseMediaPhotoToResponseData(data: any): MediaPhotoModel {
        return {
            id: data.id,
            imageUrl: data.image_url,
            mediaId: data.media_id
        }
    }


    public static parseMediaCategoryPageToResponseData(data: any): PaginatedModel<MediaCategoryModel> {
        const items = data.items.map((mediaCategory: any) => this.parseMediaCategoryToResponseData(mediaCategory))
        return PaginatedParser.parsePageToResponseData<MediaCategoryModel>(data, items)
    }

    public static parseMediaPageToResponseData(data: any): PaginatedModel<MediaModel> {
        const items = data.items.map((media: any) => this.parseMediaToResponseData(media))
        return PaginatedParser.parsePageToResponseData<MediaModel>(data, items)
    }
    
}