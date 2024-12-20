export enum EventState {
    Planned = 'planned',
    Passing = 'passing',
    Passed = 'passed'
}

export interface EventModel {
    id: number
    title: string
    description: string
    shortDescription: string
    image: string
    link: string
    location: string
    participants: string
    coordinatorContact: string
    startDate: Date
    endDate: Date
    state: EventState
}

export interface EventsYearModel {
    year: number
    events: EventModel[]
}


export interface EventsYearModel {
    year: number
    events: EventModel[]
}