import React from 'react'
import styles from './EventPage.module.scss'
import Navbar from 'src/components/navbar/Navbar'
import PageHeader from 'src/components/page-header/PageHeader'
import Footer from 'src/components/footer/Footer'
import { EventModel, EventStatus } from 'src/models/events'
import EventHeader from './event-header/EventHeader'
import EventDescription from './event-description/EventDescription'
import EventImage from './event-image/EventImage'
import EventInfo from './event-info/EventInfo'
import EventForm from './event-form/EventForm'
import { useParams } from 'react-router-dom'
import useFetchData from 'src/hooks/useFetchData'
import { EventService } from 'src/services/EventService'
import Loader from 'src/components/loader/Loader'
import NotFoundPage from '../not-found-page/NotFoundPage'

const EventPage = () => {
    const { eventId } = useParams()

    const {isLoading, data: event} = useFetchData<EventModel | null>(async () => {
        const data = await EventService.retrieveEvent(+eventId!)
        return data
    }, [])

    if (!isLoading && !event) {
        return <NotFoundPage/>
    }

    return (
        <div className={styles.container}>
            <PageHeader title='Афиша мероприятий' image='./images/pages/events.jpg'/>
            <div className={styles.event}>
                <Loader isLoading={isLoading}>
                    {event &&
                        <>
                            <EventHeader event={event}/>
                            <div className={styles.info}>
                                {event.imageUrl && <EventImage image={event.imageUrl}/>}
                                <EventDescription event={event}/>
                                <EventInfo event={event}/>
                                {event.status === EventStatus.Planned && <EventForm eventId={event.id}/>}
                            </div>
                        </>
                    }
                </Loader>
            </div>
        </div>
    )
}

export default EventPage
