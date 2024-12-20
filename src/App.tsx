import React from 'react';
import Calendar from './pages/events-page/events-calendar/Calendar';
import styles from './styles/App.module.scss'
import EventsCard from './pages/events-page/events-calendar/events-card/EventsCard';
import MainPage from './pages/main-page/MainPage';
import { slide as Menu } from 'react-burger-menu'
import { YMaps, Map } from 'react-yandex-maps';
import EventsPage from './pages/events-page/EventsPage';
import EventPage from './pages/event-page/EventPage';
import AppRouter from './AppRouter';

function App() {

    return (
        <YMaps query={{load: "package.full", apikey: process.env.YANDEX_MAPS_API_KEY}}>
            <div className={styles.container}>
                <AppRouter/>
            </div>
        </YMaps>
    );
}

export default App;
