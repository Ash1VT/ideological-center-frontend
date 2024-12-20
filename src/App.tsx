import React from 'react';
import Calendar from './pages/events-page/events-calendar/Calendar';
import styles from './styles/App.module.scss'
import EventsCard from './pages/events-page/events-calendar/events-card/EventsCard';
import MainPage from './pages/main-page/MainPage';
import { slide as Menu } from 'react-burger-menu'
import { YMaps, Map } from 'react-yandex-maps';
import EventsPage from './pages/events-page/EventsPage';
import EventPage from './pages/event-page/EventPage';

function App() {
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

    return (
        <YMaps query={{load: "package.full", apikey: process.env.YANDEX_MAPS_API_KEY}}>
            <div className={styles.container}>
                <EventPage navbarItems={navbarMenuItems}/>
                {/* <EventsPage navbarItems={navbarMenuItems}/> */}
                {/* <MainPage navbarItems={navbarMenuItems}/> */}
            </div>
        </YMaps>
    );
}

export default App;
