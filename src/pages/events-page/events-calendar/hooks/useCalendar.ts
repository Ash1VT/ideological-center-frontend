import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CalendarDayModel } from '../calendar-day/CalendarDay.props'
import { getMonthDays } from '../../../../utils/calendar'

const useCalendar = (month: number, year: number) => {
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

    return {
        curMonth,
        curYear,
        selectedDay,
        monthsData,
        onMonthSelected,
        onDaySelected,
        onClickNextYear,
        onClickPrevYear
    }
    
}

export default useCalendar
