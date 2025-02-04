import { CalendarDayModel } from "src/models/calendar"
import { EventModel } from "src/models/events"

// export type EventShortModel = {
//     id: number,
//     title: string
// }


export type EventCardProps = {
    day: CalendarDayModel
    events: EventModel[]
}