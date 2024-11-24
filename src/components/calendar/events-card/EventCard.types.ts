import { CalendarDayModel } from "../calendar-day/CalendarDay.props"

export type EventShortModel = {
    id: number,
    title: string
}


export type EventCardProps = {
    day: CalendarDayModel
    events: EventShortModel[]
}