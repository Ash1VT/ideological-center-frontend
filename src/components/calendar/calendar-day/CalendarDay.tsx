import React from 'react'
import styles from './CalendarDay.module.scss'
import { CalendarDayProps, CalendarDayType } from './CalendarDay.props'

const CalendarDay = ({day, types}: CalendarDayProps) => {
    let styleClasses = [styles.day];

    if(types.includes(CalendarDayType.WorkDay)) {
        styleClasses.push(styles.workday);    
    }

    if(types.includes(CalendarDayType.Weekend)) {
        styleClasses.push(styles.weekend);    
    }

    if(types.includes(CalendarDayType.Holiday)) {
        styleClasses.push(styles.holiday);    
    }

    if(types.includes(CalendarDayType.PrevMonthDay)) {
        styleClasses.push(styles.prevMonthDay);    
    }

    if(types.includes(CalendarDayType.NextMonthDay)) {
        styleClasses.push(styles.nextMonthDay);    
    }

    return (
        <div className={styles.container}>
            <div className={styleClasses.join(' ')}>{day}</div>
        </div>
    )
}

export default CalendarDay
