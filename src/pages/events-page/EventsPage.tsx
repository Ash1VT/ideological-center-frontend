import React, { useState } from 'react'
import { EventsPageProps } from './EventsPage.props'
import styles from './EventsPage.module.scss'
import Footer from 'src/components/footer/Footer'
import Navbar from 'src/components/navbar/Navbar'
import EventsMenu from './events-menu/EventsMenu'
import EventsMenuContent from './events-menu-content/EventsMenuContent'
import PageHeader from 'src/components/page-header/PageHeader'

const EventsPage = ({ navbarItems } : EventsPageProps) => {
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
            <Navbar logo='./images/logo.png' menuItems={navbarItems}/>

            <div className={styles.content}>
                <PageHeader/>
                <EventsMenu items={eventsMenuItems} selectedItem={selectedItem} onItemSelected={setSelectedItem}/>
                <EventsMenuContent selectedItem={selectedItem}/>
            </div>

            <Footer/>
        </div>
    )
}

export default EventsPage
