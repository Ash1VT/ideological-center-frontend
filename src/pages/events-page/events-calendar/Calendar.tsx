import { useCallback, useMemo } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Calendar.module.scss'
import { CalendarProps } from './Calendar.props';
import CalendarDay from './calendar-day/CalendarDay';
import { getSeasonImageSrc, weekDaysShortcuts } from '../../../utils/calendar';
import CalendarMonth from './calendar-month/CalendarMonth';
import EventsCard from './events-card/EventsCard';
import { AnimatePresence } from 'framer-motion';
import { CalendarDayType } from 'src/models/calendar';


const Calendar = ({monthsData, selectedDay, selectedMonth, selectedYear, events, onCalendarDaySelected, onCalendarMonthSelected, onCalendarYearSelected}: CalendarProps) => {
    const eventsList = useMemo(() => {
        return events.find((event) => {
            return event.year === selectedYear
        })?.events
    }, [events])

    const getEventsCardComponent = useCallback(() => {
        if (!selectedDay) {
            return
        }
        const events = eventsList ? eventsList.filter((event) => event.startDate <= new Date(selectedYear, selectedMonth, selectedDay.dayNum) && event.endDate >= new Date(selectedYear, selectedMonth, selectedDay.dayNum)) : []

        return <EventsCard key='event'
                           events={events}
                           day={selectedDay}/>
    }, [events, selectedDay])

    const calendarBorderStyle = {
        borderRadius: selectedDay ? '0 20px 20px 0' : '20px 20px 20px 20px'
    }

    return (
        <div className={styles.container} style={calendarBorderStyle}>
            <div className={styles.calendar} style={calendarBorderStyle}>
                <div className={styles.header}>
                    <div className={styles.year_container}>
                        <div className={styles.arrow_container}>
                            <button className={styles.arrow_button} onClick={() => onCalendarYearSelected(selectedYear - 1)}>
                                <ArrowBackIosNewIcon className={styles.arrow_icon}/>
                            </button>
                        </div>
                        <div className={styles.year}>
                        {selectedYear}
                        </div>
                        <div className={styles.arrow_container}>
                            <button className={styles.arrow_button} onClick={() => onCalendarYearSelected(selectedYear + 1)}>
                                <ArrowForwardIosIcon className={styles.arrow_icon}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.monthes}>
                    {monthsData.map(data => 
                        <CalendarMonth key={data.month} month={data.month} isSelected={selectedMonth === data.month} onMonthSelected={() => onCalendarMonthSelected(data.month)}/>
                    )}
                    </div>
                    <div className={styles.season}>
                        <div className={styles.image_container}>
                            <img key={selectedMonth} className={styles.image} src={getSeasonImageSrc(selectedMonth)} alt='season'/>
                        </div>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.weekdays}>
                        {
                            weekDaysShortcuts.map(day => 
                                <div key={day} className={styles.weekday}>{day}</div>
                            )    
                        }
                    </div>
                    <div
                        className={styles.monthsContainer}
                        style={
                                { 
                                    transform: `translateX(-${selectedMonth * 100}%)`,
                                    animation: 'slide-in-up 0.5s ease' 
                                }
                            }
                    >
                        {monthsData.map((data) => (
                            <div key={data.month} className={styles.month}>
                                <div className={styles.days}>
                                    {data.days.map((day) => {
                                        return <CalendarDay key={`${data.month}.${day.id}`} 
                                                    day={day} 
                                                    isSelected={day.id === selectedDay?.id}
                                                    hasEvents={eventsList && eventsList.length > 0  ? eventsList.some((event) => (!day.types.includes(CalendarDayType.NextMonthDay) && 
                                                                                                       !day.types.includes(CalendarDayType.PrevMonthDay)) &&
                                                                                                       event.startDate <= new Date(selectedYear, data.month, day.dayNum) && 
                                                                                                       event.endDate >= new Date(selectedYear, data.month, day.dayNum)) : false}
                                                    onDaySelected={onCalendarDaySelected}
                                                    />
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {getEventsCardComponent()}
            </AnimatePresence>
        </div>
    )
}

export default Calendar
