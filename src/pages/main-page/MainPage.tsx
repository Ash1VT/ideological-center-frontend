import React from 'react'
import styles from './MainPage.module.scss'
import BirdBackground from './bird-background/BirdBackground'
import Navbar from 'src/components/navbar/Navbar'
import Footer from 'src/components/footer/Footer'
import Section from './section/Section'
import Calendar from 'src/pages/events-page/events-calendar/Calendar'
import EventsSection from './events-section/EventsSection'
import MuseumSection from './museum-section/MuseumSection'
import AboutUsSection from './about-us-section/AboutUsSection'
import PartnersSection from './partners-section/PartnersSection'
import LocationSection from './location-section/LocationSection'
import { MainPageProps } from './MainPage.types'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'


const MainPage = ({navbarItems} : MainPageProps) => {

    const events = useSelector((state: RootState) => state.eventsMainReducer.events)

    const partners = [
        {name: 'Приход Храма Собора Всех Белорусских Святых', image: './images/partners/sobor.png', link: 'https://belsobor.by/'},
        {name: 'Государственное учреждение образования «Гродненский государственный университет имени Янки Купалы»', image: './images/partners/grsu2.svg', link: 'https://grsu.by/'},
        {name: 'Учреждение культуры «Гродненский государственный музей истории религии»', image: './images/partners/museum.png', link: 'http://religija.museum.by/'},
        {name: 'Государственное учреждение образования «Центр творчества детей и молодежи «Прамень» г. Гродно»', image: './images/partners/sun.gif', link: 'https://pramen-grodno.by/'},
        // {name: 'Научно-популярный и литературный журнал «Планета-семья»', image: './images/partners/grsu.png', link: ''},
    ]

    return (
        <div className={styles.container}>
            <Navbar logo='./images/logo.png' menuItems={navbarItems}/>   
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
