import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getMonthDays } from '../../../../utils/calendar'
import { CalendarDayModel, CalendarMonthModel } from 'src/models/calendar';

const useCalendar = (month: number, year: number, onMonth: (month: number) => Promise<void>, onYear: (year: number) => Promise<void>) => {
    const [selectedMonth, setSelectedMonth] = useState(month);
    const [selectedYear, setSelectedYear] = useState(year);
    const [selectedDay, setSelectedDay] = useState<CalendarDayModel | null>(null);
    const [monthsData, setMonthsData] = useState<CalendarMonthModel[]>([]);

    useEffect(() => {
        Promise.all(
            Array.from({ length: 12 }, (_, i) => ({
                         month: i,
                         days: getMonthDays(i, selectedYear),
            }))
        ).then((data) => {
            setMonthsData(data);
        });
    }, [selectedYear]);

    const onMonthSelected = async (month: number) => {
        setSelectedDay(null);
        setSelectedMonth(month);
        await onMonth(month);
    }

    const onDaySelected = (day: CalendarDayModel) => {
        if (selectedDay?.id === day.id) {
            setSelectedDay(null);
            return;
        }

        setSelectedDay(day);
    }

    const onYearSelected = async (year: number) => {
        setSelectedDay(null);
        setSelectedYear(year);
        await onYear(year);
    }

    return {
        selectedMonth,
        selectedYear,
        selectedDay,
        monthsData,
        onMonthSelected,
        onDaySelected,
        onYearSelected
    }
    
}

export default useCalendar
