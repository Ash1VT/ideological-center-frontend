import React from 'react'
import EventCard from './events-card/EventCard'
import styles from './EventsSection.module.scss'
import { EventsSectionProps } from './EventsSection.props'
import Section from '../section/Section'
import SectionButton from '../ui/section-button/SectionButton'

const EventsSection = ({events}: EventsSectionProps) => {

    return (
        <Section title='Афиша' subtitle='Мероприятия и события'>
            <div className={styles.container}>
                <div className={styles.events}>
                    {events.map((event) => {
                        return <EventCard key={event.id} event={event}/>
                    })}
                </div>
                <SectionButton title='Перейти к афише мероприятий' onClick={() => {}}/>
            </div>
        </Section>
    )
}

export default EventsSection
