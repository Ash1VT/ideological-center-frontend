import React from 'react';
import Calendar from './components/calendar/Calendar';
import styles from './App.module.scss'

function App() {

    const now = new Date(Date.now());
    
    // return (
    //     <CalendarSeason month={now.getMonth()}/>
    // )

    return (
        <div className={styles.container}>
            <Calendar month={now.getMonth()} year={now.getFullYear()}/>
        </div>
    );
}

export default App;
