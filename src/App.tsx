import React from 'react';
import Calendar from './components/calendar/Calendar';
import styles from './App.module.scss'
import EventsCard from './components/calendar/events-card/EventsCard';
import MainPage from './pages/main-page/MainPage';
import { slide as Menu } from 'react-burger-menu'
import { YMaps, Map } from 'react-yandex-maps';

function App() {

    return (
        <YMaps query={{load: "package.full", apikey: process.env.YANDEX_MAPS_API_KEY}}>
            <MainPage/>
        </YMaps>
    );
}

export default App;
