import React from 'react'
import styles from './CalendarDay.module.scss'
import { CalendarDayProps, CalendarDayType } from './CalendarDay.props'

const CalendarDay = ({day, hasEvents, isSelected, onDaySelected}: CalendarDayProps) => {
    let styleClasses = [styles.day];

    if(isSelected) {
        styleClasses.push(styles.selected);
    }

    if(hasEvents) {
        styleClasses.push(styles.hasEvents);
    }

    if(day.types.includes(CalendarDayType.WorkDay)) {
        styleClasses.push(styles.workday);    
    }

    if(day.types.includes(CalendarDayType.Weekend)) {
        styleClasses.push(styles.weekend);    
    }

    if(day.types.includes(CalendarDayType.Holiday)) {
        styleClasses.push(styles.holiday);    
    }

    if(day.types.includes(CalendarDayType.PrevMonthDay)) {
        styleClasses.push(styles.prevMonthDay);    
    }

    if(day.types.includes(CalendarDayType.NextMonthDay)) {
        styleClasses.push(styles.nextMonthDay);    
    }

    return (
        <div className={styles.container} onClick={() => onDaySelected(day)}>
            <div className={styleClasses.join(' ')}>{day.dayNum}</div>
        </div>
    )
}

export default CalendarDay
