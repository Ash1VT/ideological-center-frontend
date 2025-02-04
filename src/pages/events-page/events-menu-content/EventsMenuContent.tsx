import React, { useReducer } from 'react'
import styles from './EventsMenuContent.module.scss'
import { EventsMenuContentProps } from './EventsMenuContent.props'
import classnames from 'classnames'
import EventsList from '../events-list/EventsList'
import { EventStatus, EventsYearModel } from 'src/models/events'
import { useSelector } from 'react-redux'
import EventsShowButton from '../ui/events-show-button/EventsShowButton'
import Calendar from '../events-calendar/Calendar'
import Loader from 'src/components/loader/Loader'

const EventsMenuContent = ({isLoading, monthsData, selectedDay, selectedMonth, selectedYear, onCalendarDaySelected, onCalendarMonthSelected, onCalendarYearSelected, selectedItem, events, showPrevYearButtonVisible, onShowPrevYearEvents} : EventsMenuContentProps) => {
    return (
        <div className={styles.container}>
            <div className={classnames(styles.content, selectedItem === 1 ? styles.active : '')}>
                <Calendar monthsData={monthsData} 
                          selectedDay={selectedDay} 
                          selectedMonth={selectedMonth} 
                          selectedYear={selectedYear} 
                          onCalendarDaySelected={onCalendarDaySelected} 
                          onCalendarMonthSelected={onCalendarMonthSelected} 
                          onCalendarYearSelected={onCalendarYearSelected} 
                          events={events}/>
            </div>
            <div className={classnames(styles.content, selectedItem === 2 ? styles.active : '')}>
                {events.length > 0 ? 
                    <EventsList events={events}/>
                    :
                    <div className={styles.empty}>
                        <h2>Нет мероприятий</h2>
                    </div>
                }
                <Loader isLoading={isLoading}>
                    {showPrevYearButtonVisible && <EventsShowButton title='Показать предыдущий год' onShow={onShowPrevYearEvents}/>}
                </Loader>
            </div>
        </div>
    )
}

export default EventsMenuContent
