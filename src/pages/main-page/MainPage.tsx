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
import AboutUsSection from './about-us-section/AboutUsSection'
import PartnersSection from './partners-section/PartnersSection'
import LocationSection from './location-section/LocationSection'


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
            image: './images/test.jpg',
            link: '',
            location: 'Москва, Россия',
            startDate: '2023-04-01',
            endDate: '2023-04-10'
        },
        {
            id: 2,
            title: 'Мероприятие 1',
            description: 'Описание мероприятия 1',
            image: './images/test.jpg',
            link: '',
            location: 'Москва, Россия',
            startDate: '2023-04-01',
            endDate: '2023-04-10'
        }
    ]

    const partners = [
        {name: 'Приход Храма Собора Всех Белорусских Святых', image: './images/partners/sobor.png', link: 'https://belsobor.by/'},
        {name: 'Государственное учреждение образования «Гродненский государственный университет имени Янки Купалы»', image: './images/partners/grsu2.svg', link: 'https://grsu.by/'},
        {name: 'Учреждение культуры «Гродненский государственный музей истории религии»', image: './images/partners/museum.png', link: 'http://religija.museum.by/'},
        {name: 'Государственное учреждение образования «Центр творчества детей и молодежи «Прамень» г. Гродно»', image: './images/partners/sun.gif', link: 'https://pramen-grodno.by/'},
        // {name: 'Научно-популярный и литературный журнал «Планета-семья»', image: './images/partners/grsu.png', link: ''},
    ]

    return (
        <div className={styles.container}>
            <Navbar menuItems={navbarMenuItems}/>   
            <BirdBackground/>
            <div className={styles.sections}>
                <AboutUsSection/>
                <EventsSection events={events}/>
                <MuseumSection/>
                <PartnersSection partners={partners}/>
                <LocationSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage
