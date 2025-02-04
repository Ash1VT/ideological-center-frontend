import { CalendarDayModel, CalendarMonthModel } from "src/models/calendar"
import { EventsYearModel } from "src/models/events"

export type EventsMenuContentProps = {
    selectedItem: number
    isLoading: boolean
    //List Props
    events: EventsYearModel[]
    showPrevYearButtonVisible: boolean
    
    // Calendar Props
    monthsData: CalendarMonthModel[]
    selectedDay?: CalendarDayModel | null
    selectedMonth: number
    selectedYear: number
    onCalendarYearSelected: (year: number) => void
    onCalendarMonthSelected: (month: number) => void
    onCalendarDaySelected: (day: CalendarDayModel) => void
    
    onShowPrevYearEvents: () => Promise<void>
}