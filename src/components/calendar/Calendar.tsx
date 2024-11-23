import React, { useEffect, useMemo, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Calendar.module.scss'
import { CalendarProps } from './Calendar.props';
import CalendarDay from './calendar-day/CalendarDay';
import { CalendarDay as CalendarDayIdiNa, CalendarDayProps, CalendarDayType } from './calendar-day/CalendarDay.props';
import Holidays from 'date-holidays';
import { getDaysInMonth, getFirstDayOfMonth, getMonthDays, getMonthName, getSeasonImageSrc } from '../../utils/calendar';
import CalendarMonth from './calendar-month/CalendarMonth';


const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const monthShortcuts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const Calendar = ({month, year}: CalendarProps) => {
    const [curMonth, setCurMonth] = useState(month);
    const [curYear, setCurYear] = useState(year);
    const [isLoading, setIsLoading] = useState(true);
    const [monthsData, setMonthsData] = useState<{ month: number; days: CalendarDayIdiNa[] }[]>([]);

    useEffect(() => {
        setIsLoading(true);

        Promise.all(
            Array.from({ length: 12 }, (_, i) => ({
                         month: i,
                         days: getMonthDays(i, curYear),
            }))
        ).then((data) => {
            setMonthsData(data);

            setTimeout(() => {
                setIsLoading(false);
            }, 200)
        });
    }, [curYear]);

    const onMonthSelected = (month: number) => {
        setCurMonth(month);
    }

    const onClickNextYear = () => {
        setCurYear(curYear + 1);
    }

    const onClickPrevYear = () => {
        setCurYear(curYear - 1);
    }

    return (
        <div className={styles.container}>
            {isLoading ? <div>Loading...</div> :
            (<div className={styles.calendar}>
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
                        <CalendarMonth month={data.month} isSelected={curMonth === data.month} onMonthSelected={onMonthSelected}/>
                      )}
                    </div>
                    <div className={styles.season}>
                        <img key={curMonth} className={styles.image} src={getSeasonImageSrc(curMonth)} alt='season'/>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.weekdays}>
                        {
                            weekDays.map(day => 
                                <div className={styles.weekday}>{day}</div>
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
                                        <CalendarDay key={`${data.month}.${day.idx}`} idx={day.idx} day={day.day} types={day.types} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>)
        } 
        </div>
    )
}

export default Calendar
