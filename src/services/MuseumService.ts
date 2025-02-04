import { backendUrl } from "src/constants/backend";
import { MuseumHallModel, MuseumSectionModel } from "src/models/museum";
import { PaginatedModel } from "src/models/paginate";
import MuseumParser from "src/parsers/MuseumParser";
import { backend } from "./axios";

export default class MuseumService {
    public static async retrieveMuseumHalls(page?: number, perPage?: number): Promise<PaginatedModel<MuseumHallModel>> {
        const response = await backend.get('museum/halls/', {
            params: {
                page: page,
                perPage: perPage
            }
        })

        return MuseumParser.parseMuseumHallPageToResponseData(response.data)
    }
}