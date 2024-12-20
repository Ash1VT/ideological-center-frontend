import React from 'react'
import styles from './EventsList.module.scss'
import EventCard from './event-card/EventCard'
import { EventsListProps } from './EventsList.props'

const EventsList = ({events} : EventsListProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {events.map((event) => (
                    <React.Fragment key={event.year}>
                        <div className={styles.year}>
                            <h3>{event.year}</h3>    
                        </div>
                        <div className={styles.events}>
                            {event.events.map((event) => (
                                <EventCard key={event.id} event={event}/>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default EventsList
