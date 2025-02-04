import { EventApplicationCreate, EventApplicationModel } from "src/models/application";

export class EventApplicationParser {
    public static parseEventApplicationToResponseData(data: any): EventApplicationModel {
        return {
            id: data.id,
            fio: data.fio,
            email: data.email,
            phone: data.phone,
            birthDate: new Date(data.birthdate),
            studyOrganization: data.study_organisation,
            comment: data.comment,
            eventId: data.event_id,
            status: data.status
        }
    }

    public static parseEventApplicationCreateToRequestData(data: EventApplicationCreate): any {
        return {
            fio: data.fio,
            email: data.email,
            phone: data.phone,
            birthdate: data.birthDate,
            study_organisation: data.studyOrganization,
            comment: data.comment
        }
    }
}