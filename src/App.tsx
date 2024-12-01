import React from 'react';
import Calendar from './components/calendar/Calendar';
import styles from './App.module.scss'
import EventsCard from './components/calendar/events-card/EventsCard';
import MainPage from './pages/main-page/MainPage';
import { slide as Menu } from 'react-burger-menu'

function App() {
    
    const now = new Date(Date.now());

    return <MainPage/>;

    return (
        <div className={styles.container}>
            <Calendar month={now.getMonth()} year={now.getFullYear()}/>
        </div>
    );
}

export default App;
