export enum EventApplicationStatus {
    ACCEPTED = 0,
    REJECTED = 1,
    PENDING = 2
}


export interface EventApplicationModel {
    id: number,
    fio: string,
    email: string,
    phone: string,
    birthDate: Date,
    studyOrganization: string
    comment?: string
    eventId: number
    
    status: EventApplicationStatus
}

export interface EventApplicationCreate {
    fio: string,
    email: string,
    phone: string,
    birthDate: Date,
    studyOrganization: string
    comment?: string
}