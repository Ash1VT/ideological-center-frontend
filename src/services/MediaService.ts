import { MediaCategoryModel, MediaModel, MediaType } from "src/models/media"
import { PaginatedModel } from "src/models/paginate"
import { backend } from "./axios"
import MediaParser from "src/parsers/MediaParser"
import { parseQueryParams } from "./utils"

export default class MediaService {

    public static getMediaTypes(mediaTypeSlug?: string): MediaType[] {
        const types: MediaType[] = []

        if (mediaTypeSlug) {
            if (mediaTypeSlug === 'normdocs')
                types.push(MediaType.NORM)
            else if (mediaTypeSlug === 'methodocs')
                types.push(MediaType.METHODIC)
            else if (mediaTypeSlug === 'studymaterials')
                types.push(MediaType.STUDY)
            else if (mediaTypeSlug === 'presentations')
                types.push(MediaType.PRESENTATION)
            else if (mediaTypeSlug === 'photovideo')
                types.push(MediaType.PHOTO, MediaType.VIDEO)
        }

        return types
    }

    public static async retrieveMediaCategories(page?: number, perPage?: number, mediaTypeSlug?: string): Promise<PaginatedModel<MediaCategoryModel>> {
        const types: MediaType[] = this.getMediaTypes(mediaTypeSlug)
        
        const response = await backend.get('media/categories/', {
            params: {
                page: page,
                per_page: perPage,
                types: types
            },
            paramsSerializer: (params) => {
                return parseQueryParams(params)
            }
        })

        return MediaParser.parseMediaCategoryPageToResponseData(response.data)
    }

    public static async retrieveMedia(page?: number, perPage?: number, categoryId?: number, mediaTypeSlug?: string, nameContains?: string): Promise<PaginatedModel<MediaModel>> {
        
        const types: MediaType[] = this.getMediaTypes(mediaTypeSlug)

        const response = await backend.get('media/', {
            params: {
                page: page,
                per_page: perPage,
                category_id: categoryId,
                name_contains: nameContains,
                types: types
            },
            paramsSerializer: (params) => {
                return parseQueryParams(params)
            }
        })

        return MediaParser.parseMediaPageToResponseData(response.data)

    }

    public static async retrieveMediaById(id: number): Promise<MediaModel | null> {
        try {
            const response = await backend.get(`media/${id}`)
            return MediaParser.parseMediaToResponseData(response.data)
        }
        catch (error) {
            return null
        }
    }
}