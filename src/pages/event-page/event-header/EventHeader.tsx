import React from 'react'
import styles from './EventHeader.module.scss'
import { EventHeaderProps } from './EventHeader.props'
import { formatDate } from '../utils/dates'

const EventHeader = ({event} : EventHeaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>{event.name}</h1>
                <div className={styles.date}>
                    <p>{formatDate(event.startDate)} - {formatDate(event.endDate)}</p>
                </div>
            </div>
        </div>
    )
}

export default EventHeader
