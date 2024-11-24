import React, { useEffect, useMemo, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Calendar.module.scss'
import { CalendarProps } from './Calendar.props';
import CalendarDay from './calendar-day/CalendarDay';
import { CalendarDayModel, CalendarDayProps, CalendarDayType } from './calendar-day/CalendarDay.props';
import Holidays from 'date-holidays';
import { getDaysInMonth, getFirstDayOfMonth, getMonthDays, getMonthName, getSeasonImageSrc, weekDays, weekDaysShortcuts } from '../../utils/calendar';
import CalendarMonth from './calendar-month/CalendarMonth';
import EventsCard from './events-card/EventsCard';
import { EventShortModel } from './events-card/EventCard.types';
import { AnimatePresence, motion } from 'framer-motion';


const Calendar = ({month, year}: CalendarProps) => {
    const events: EventShortModel[] = [ 
        {
            id: 1,
            title: 'Дзень Дзень Дзень ДзеньДзень ДзеньДзень Дзень',
        },
        {
            id: 2,
            title: 'Event 2',
        },
        {
            id: 3,
            title: 'Event 3',
        },
        {
            id: 4,
            title: 'Event 4',
        },
    ]

    const [curMonth, setCurMonth] = useState(month);
    const [curYear, setCurYear] = useState(year);
    const [selectedDay, setSelectedDay] = useState<CalendarDayModel | null>(null);
    const [monthsData, setMonthsData] = useState<{ month: number; days: CalendarDayModel[] }[]>([]);

    useEffect(() => {
        Promise.all(
            Array.from({ length: 12 }, (_, i) => ({
                         month: i,
                         days: getMonthDays(i, curYear),
            }))
        ).then((data) => {
            setMonthsData(data);
        });
    }, [curYear]);

    const onMonthSelected = (month: number) => {
        setSelectedDay(null);
        setCurMonth(month);
    }

    const onDaySelected = (day: CalendarDayModel) => {
        if (selectedDay?.id === day.id) {
            setSelectedDay(null);
            return;
        }

        setSelectedDay(day);
    }

    const onClickNextYear = () => {
        setSelectedDay(null);
        setCurYear(curYear + 1);
    }

    const onClickPrevYear = () => {
        setSelectedDay(null);
        setCurYear(curYear - 1);
    }

    const calendarBorderStyle = {
        borderRadius: selectedDay ? '0 20px 20px 0' : '20px 20px 20px 20px'
    }

    return (
        <div className={styles.container} style={calendarBorderStyle}>
            <div className={styles.calendar} style={calendarBorderStyle}>
                <div className={styles.header}>
                    <div className={styles.year_container}>
                        <div className={styles.arrow_container}>
                            <button className={styles.arrow_button} onClick={onClickPrevYear}>
                                <ArrowBackIosNewIcon className={styles.arrow_icon}/>
                            </button>
                        </div>
                        <div className={styles.year}>
                        {curYear}
                        </div>
                        <div className={styles.arrow_container}>
                            <button className={styles.arrow_button} onClick={onClickNextYear}>
                                <ArrowForwardIosIcon className={styles.arrow_icon}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.monthes}>
                    {monthsData.map(data => 
                        <CalendarMonth key={data.month} month={data.month} isSelected={curMonth === data.month} onMonthSelected={onMonthSelected}/>
                    )}
                    </div>
                    <div className={styles.season}>
                        <div className={styles.image_container}>
                            <img key={curMonth} className={styles.image} src={getSeasonImageSrc(curMonth)} alt='season'/>
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
                                    transform: `translateX(-${curMonth * 100}%)`,
                                    animation: 'slide-in-up 0.5s ease' 
                                }
                            }
                    >
                        {monthsData.map((data) => (
                            <div key={data.month} className={styles.month}>
                                <div className={styles.days}>
                                    {data.days.map((day) => (
                                        <CalendarDay key={`${data.month}.${day.id}`} 
                                                    day={day} 
                                                    isSelected={day.id === selectedDay?.id}
                                                    hasEvents={true}
                                                    onDaySelected={onDaySelected}
                                                    />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {selectedDay && <EventsCard 
                                    key='event'
                                    events={events}
                                    day={selectedDay}/>}
            </AnimatePresence>
        </div>
    )
}

export default Calendar
