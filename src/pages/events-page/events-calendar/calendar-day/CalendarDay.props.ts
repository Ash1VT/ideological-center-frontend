import { CalendarDayModel } from "src/models/calendar"

export type CalendarDayProps = {
    day: CalendarDayModel
    isSelected: boolean
    onDaySelected: (day: CalendarDayModel) => void
    hasEvents: boolean
}