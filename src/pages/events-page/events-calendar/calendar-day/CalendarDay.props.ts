export enum CalendarDayType {
    WorkDay = 'workday',
    Weekend = 'weekend',
    Holiday = 'holiday',
    PrevMonthDay = 'prevMonthDay',
    NextMonthDay = 'nextMonthDay',
}

export type CalendarDayModel = {
    id: number
    dayNum: number
    weekDayNum: number
    monthNum: number
    types: CalendarDayType[]
}

export type CalendarDayProps = {
    day: CalendarDayModel
    isSelected: boolean
    onDaySelected: (day: CalendarDayModel) => void
    hasEvents: boolean
}