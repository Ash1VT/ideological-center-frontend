import { EventModel } from "src/models/events"
import { backend } from "./axios"
import { EventParser } from "src/parsers/EventParser"
import { PaginatedModel } from "src/models/paginate"
import { formatDateYMD } from "src/utils/date"
import axios from "axios"

export class EventService {

    public static async retrieveEvents(page?: number, perPage?: number, nameContains?: string, startDate?: Date, endDate?: Date): Promise<PaginatedModel<EventModel>> {
        const response = await backend.get('events/', {
            params: {
                page: page,
                per_page: perPage,
                name_contains: nameContains,
                start_dt: startDate && formatDateYMD(startDate),
                end_dt: endDate && formatDateYMD(endDate)
            }
        })

        return EventParser.parseEventsPageToResponseData(response.data)
    }

    public static async retrieveEvent(id: number): Promise<EventModel | null> {
        try {
            const response = await backend.get(`events/${id}`)
            return EventParser.parseEventToResponseData(response.data)
        }
        catch (error) {
            return null
        }
    }
}