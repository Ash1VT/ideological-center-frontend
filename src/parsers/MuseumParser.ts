import { MuseumHallModel, MuseumSectionModel } from "src/models/museum"
import { PaginatedModel } from "src/models/paginate"
import PaginatedParser from "./PaginatedParser"

export default class MuseumParser {
    public static parseMuseumSectionToResponseData(data: any): MuseumSectionModel {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            imageUrl: data.image_url,
            hallId: data.hall_id
        }
    }
    public static parseMuseumHallToResponseData(data: any): MuseumHallModel {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            imageUrl: data.image_url,
            sections: data.sections?.map((museumSection: any) => this.parseMuseumSectionToResponseData(museumSection))
        }
    }


    public static parseMuseumHallPageToResponseData(data: any): PaginatedModel<MuseumHallModel> {
        const items = data.items.map((museumHall: any) => this.parseMuseumHallToResponseData(museumHall))
        return PaginatedParser.parsePageToResponseData<MuseumHallModel>(data, items)
    }
}

