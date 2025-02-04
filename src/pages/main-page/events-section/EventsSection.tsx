import React from 'react'
import EventCard from './event-card/EventCard'
import styles from './EventsSection.module.scss'
import Section from '../section/Section'
import SectionButton from '../ui/section-button/SectionButton'
import { useNavigate } from 'react-router-dom'
import useFetchData from 'src/hooks/useFetchData'
import { EventModel } from 'src/models/events'
import { EventService } from 'src/services/EventService'
import Loader from 'src/components/loader/Loader'

const EventsSection = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/events')
    }

    const {isLoading, data: events} = useFetchData<EventModel[]>(async () => {
        const data = await EventService.retrieveEvents(1, 4)
        return data.items
    }, [], {isArrayData: true})

    return (
        <Section title='Афиша' subtitle='Мероприятия и события'>
            <div className={styles.container}>
                <Loader isLoading={isLoading}>
                    <div className={styles.events}>
                        {events.map((event) => {
                            return <EventCard key={event.id} event={event}/>
                        })}
                    </div>
                    <SectionButton title='Перейти к афише мероприятий' onClick={handleClick}/>
                </Loader>
            </div>
        </Section>
    )
}

export default EventsSection
