import { CalendarDayModel, CalendarMonthModel } from "src/models/calendar"
import { EventModel, EventsYearModel } from "src/models/events"

export type CalendarProps = {
    monthsData: CalendarMonthModel[]

    selectedDay?: CalendarDayModel | null
    selectedMonth: number
    selectedYear: number
    
    events: EventsYearModel[]
    
    onCalendarYearSelected: (year: number) => void
    onCalendarMonthSelected: (month: number) => void
    onCalendarDaySelected: (day: CalendarDayModel) => void
}