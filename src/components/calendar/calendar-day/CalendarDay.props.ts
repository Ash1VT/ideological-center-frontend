export enum CalendarDayType {
    WorkDay = 'workday',
    Weekend = 'weekend',
    Holiday = 'holiday',
    PrevMonthDay = 'prevMonthDay',
    NextMonthDay = 'nextMonthDay',
}

export type CalendarDay = {
    idx: number
    day: number
    types: CalendarDayType[]
}

export type CalendarDayProps = CalendarDay