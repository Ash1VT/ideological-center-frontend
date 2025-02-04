import { EventApplicationCreate, EventApplicationModel } from "src/models/application";
import { backend } from "./axios";
import { EventApplicationParser } from "src/parsers/EventApplicationParser";

export class EventApplicationService {
    public static async createEventApplication(eventId: number, application: EventApplicationCreate): Promise<EventApplicationModel> {
        const response = await backend.post(`events/${eventId}/applications/`, EventApplicationParser.parseEventApplicationCreateToRequestData(application))
        return EventApplicationParser.parseEventApplicationToResponseData(response.data)
    }
}