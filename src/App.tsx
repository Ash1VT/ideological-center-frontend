import React from 'react';
import Calendar from './components/calendar/Calendar';
import styles from './App.module.scss'
import EventsCard from './components/calendar/events-card/EventsCard';
import AnimatedBlocks from './AnimatedBlocks';

function App() {

    const now = new Date(Date.now());
    // return <AnimatedBlocks/>;
    return (
        <div className={styles.container}>
            <Calendar month={now.getMonth()} year={now.getFullYear()}/>
        </div>
    );
}

export default App;
