import React from 'react'
import { EventDescriptionProps } from './EventDescription.props'
import styles from './EventDescription.module.scss'
import EventSection from '../event-section/EventSection'

const EventDescription = ({event} : EventDescriptionProps) => {
    return (
        <EventSection title='Описание'>
            <div className={styles.container}>
                <p>{event.description}</p>
            </div>
        </EventSection>
    )
}

export default EventDescription
