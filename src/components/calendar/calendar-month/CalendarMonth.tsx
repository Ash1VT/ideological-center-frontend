import React, { useState } from 'react'
import { CalendarMonthProps } from './CalendarMonth.props'
import styles from './CalendarMonth.module.scss'
import { getMonthShortName } from 'src/utils/calendar'

const CalendarMonth = ({month, isSelected, onMonthSelected} : CalendarMonthProps) => {
    const monthStyles = [styles.month];

    if (isSelected) {
        monthStyles.push(styles.selected);
    }

    return (
        <div className={styles.container} onClick={() => onMonthSelected(month)}>
            <div className={monthStyles.join(' ')}>
                {getMonthShortName(month)}
            </div>
        </div>
    )
}

export default CalendarMonth
