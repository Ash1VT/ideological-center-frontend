import React from 'react'
import styles from './EventPage.module.scss'
import Navbar from 'src/components/navbar/Navbar'
import PageHeader from 'src/components/page-header/PageHeader'
import Footer from 'src/components/footer/Footer'
import { EventModel, EventState } from 'src/redux/models/events'
import EventHeader from './event-header/EventHeader'
import EventDescription from './event-description/EventDescription'
import EventImage from './event-image/EventImage'
import EventInfo from './event-info/EventInfo'
import EventForm from './event-form/EventForm'

const EventPage = () => {

    const event: EventModel = {
        id: 1,
        title: 'Мероприятие',
        shortDescription: 'Краткое описание мероприятия',
        description: 'Описание мероприятия',
        participants: 'Участники',
        coordinatorContact: 'Контакты',
        image: './images/test.jpg',
        link: '',
        location: 'Москва',
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-01-02'),
        state: EventState.Passing
    }


    return (
        <div className={styles.container}>
            <PageHeader title='Афиша мероприятий' image='./images/pages/events.jpg'/>
            <div className={styles.event}>
                <EventHeader event={event}/>
                <div className={styles.info}>
                    <EventImage image={event.image}/>
                    <EventDescription event={event}/>
                    <EventInfo event={event}/>
                    <EventForm/>
                </div>
            </div>
        </div>
    )
}

export default EventPage
