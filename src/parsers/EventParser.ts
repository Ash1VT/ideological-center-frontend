import { EventModel } from "src/models/events";
import PaginatedParser from "./PaginatedParser";
import { PaginatedModel } from "src/models/paginate";

export class EventParser {
    public static parseEventToResponseData(data: any): EventModel {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            shortDescription: data.short_description,
            imageUrl: data.image_url,
            location: data.location,
            participants: data.participants,
            coordinatorContact: data.coordinator_contact,
            startDate: new Date(data.start_date),
            endDate: new Date(data.end_date),
            status: data.status
        }
    }

    public static parseEventsPageToResponseData(data: any): PaginatedModel<EventModel> {
        const items = data.items.map((event: any) => this.parseEventToResponseData(event))
        return PaginatedParser.parsePageToResponseData<EventModel>(data, items)
    }
}