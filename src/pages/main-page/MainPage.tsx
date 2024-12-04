import React from 'react'
import styles from './MainPage.module.scss'
import BirdBackground from './bird-background/BirdBackground'
import Navbar from 'src/components/navbar/Navbar'
import Footer from 'src/components/footer/Footer'
import Section from './section/Section'
import Calendar from 'src/components/calendar/Calendar'
import EventsSection from './events-section/EventsSection'
import { EventModel } from './events-section/events-card/EventCard.props'
import MuseumSection from './museum-section/MuseumSection'


const MainPage = () => {
    const navbarMenuItems = [
            {name: 'О нас', link: ''},
            {name: 'Афиша событий', link: ''},
            {name: 'Партнеры', link: ''},
            {name: 'Музей', link: ''},
            {name: 'Библиотека', link: '', subitems: [
                {name: 'Нормативные документы', link: ''},
                {name: 'Методические документы', link: ''},
                {name: 'Обучающие материалы', link: ''},
                {name: 'Презентации', link: ''},
                {name: 'Фото и видео', link: ''},
            ]}
    ]

    const events: EventModel[] = [
        {
            id: 1,
            title: 'Мероприятие 1',
            description: 'Описание мероприятия 1',
            image: '/images/test.jpg',
            link: '',
            location: 'Москва, Россия',
            startDate: '2023-04-01',
            endDate: '2023-04-10'
        },
        {
            id: 2,
            title: 'Мероприятие 1',
            description: 'Описание мероприятия 1',
            image: '/images/test.jpg',
            link: '',
            location: 'Москва, Россия',
            startDate: '2023-04-01',
            endDate: '2023-04-10'
        }
    ]

    const now = new Date()

    return (
        <div className={styles.container}>
            <Navbar menuItems={navbarMenuItems}/>
            <BirdBackground/>
            <EventsSection events={events}/>
            <MuseumSection/>
            <Footer/>
        </div>
    )
}

export default MainPage
