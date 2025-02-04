export enum EventStatus {
    Planned = 0,
    Passing = 1,
    Passed = 2
}

export interface EventModel {
    id: number
    name: string
    description?: string
    shortDescription?: string
    imageUrl?: string
    // link: string
    location?: string
    participants?: string
    coordinatorContact?: string
    startDate: Date
    endDate: Date
    status: EventStatus
}

export interface EventsYearModel {
    year: number
    events: EventModel[]
}


export interface EventsYearModel {
    year: number
    events: EventModel[]
}