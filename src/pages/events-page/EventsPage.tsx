import React, { useState } from 'react'
import styles from './EventsPage.module.scss'
import Footer from 'src/components/footer/Footer'
import Navbar from 'src/components/navbar/Navbar'
import EventsMenu from './events-menu/EventsMenu'
import EventsMenuContent from './events-menu-content/EventsMenuContent'
import PageHeader from 'src/components/page-header/PageHeader'

const EventsPage = () => {
    const [selectedItem, setSelectedItem] = useState(1)

    const eventsMenuItems = [
        {
            id: 1,
            label: 'Календарь мероприятий'
        },
        {
            id: 2,
            label: 'Список мероприятий'
        }
    ]

    return (
        <div className={styles.container}>
            <PageHeader title='Афиша мероприятий' image='./images/pages/events.jpg'/>
            <EventsMenu items={eventsMenuItems} selectedItem={selectedItem} onItemSelected={setSelectedItem}/>
            <EventsMenuContent selectedItem={selectedItem}/>
        </div>
    )
}

export default EventsPage
