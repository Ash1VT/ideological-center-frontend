import React, { useReducer } from 'react'
import styles from './EventsMenuContent.module.scss'
import { EventsMenuContentProps } from './EventsMenuContent.props'
import Calendar from 'src/pages/events-page/events-calendar/Calendar'
import classnames from 'classnames'
import EventsList from '../events-list/EventsList'
import { EventState, EventsYearModel } from 'src/redux/models/events'
import { RootState } from 'src/redux/store'
import { useSelector } from 'react-redux'

const EventsMenuContent = ({selectedItem} : EventsMenuContentProps) => {
    const now = new Date(Date.now());
    const events = useSelector((state: RootState) => state.eventsReducer.events)

    return (
        <div className={styles.container}>
            <div className={classnames(styles.content, selectedItem === 1 ? styles.active : '')}>
                <Calendar month={now.getMonth()} year={now.getFullYear()}/>
            </div>
            <div className={classnames(styles.content, selectedItem === 2 ? styles.active : '')}>
                <EventsList events={events}/>
            </div>
        </div>
    )
}

export default EventsMenuContent
