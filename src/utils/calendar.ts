import Holidays from "date-holidays";
import { CalendarDayModel, CalendarDayType } from "../components/calendar/calendar-day/CalendarDay.props";

const hd = new Holidays();
hd.init('BY');

export const monthesShortcuts: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const monthes: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const weekDaysShortcuts = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export function getSeasonImageSrc(month: Number): string {
    
    if (month === 0) {
        return '/images/calendar/winter2.gif';
    }

    if (month === 1) {
        return '/images/calendar/winter3.gif';
    }

    if (month === 2) {
        return '/images/calendar/spring1.gif';
    }

    if (month === 3) {
        return '/images/calendar/spring2.gif';
    }

    if (month === 4) {
        return '/images/calendar/spring3.gif';
    }

    if (month === 5) {
        return '/images/calendar/summer1.gif';
    }

    if (month === 6) {
        return '/images/calendar/summer2.gif';
    }

    if (month === 7) {
        return '/images/calendar/summer3.gif';
    }

    if (month === 8) {
        return '/images/calendar/autumn1.gif';
    }

    if (month === 9) {
        return '/images/calendar/autumn2.gif';
    }

    if (month === 10) {
        return '/images/calendar/autumn3.gif';
    }

    if (month === 11) {
        return '/images/calendar/winter1.gif';
    }

    return '/images/calendar/autumn.gif';
}

// Получение количества дней в месяце
export const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

// Определение первого дня месяца
export const getFirstDayOfMonth = (year: number, month: number): number => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
};

export const getMonthShortName = (month: number): string => {
 
    if (month < 0 || month > 11) {
        throw new Error("Month must be between 0 and 11.");
    }
  
    return monthesShortcuts[month];
}
// Получение названия месяца
export const getMonthName = (month: number): string => {
    if (month < 0 || month > 11) {
        throw new Error("Month must be between 0 and 11.");
    }
  
    return monthes[month];
};

export const getWeekDayName = (day: number): string => {
    if (day === 0) {
        return weekDays[6];
    }
    return weekDays[day-1];
}

export const isHoliday = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month, day);
    if (hd.isHoliday(date)) {
        return true;
    }
    return false;
};

export const isWeekend = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month, day);
    return date.getDay() === 6 || date.getDay() === 0;
}

const getDay = (id: number, day: number, month: number, year: number, defaultType: CalendarDayType): CalendarDayModel => {
    const dayTypes = [defaultType];

    if (isHoliday(day, month, year)) {
        dayTypes.push(CalendarDayType.Holiday);
    }

    if (isWeekend(day, month, year)) {
        if (dayTypes.includes(CalendarDayType.WorkDay)) {
            dayTypes.splice(dayTypes.indexOf(CalendarDayType.WorkDay), 1);
        }

        dayTypes.push(CalendarDayType.Weekend);
    }

    return {
        id,
        dayNum: day,
        weekDayNum: new Date(year, month, day).getDay(),
        monthNum: month,
        types: dayTypes
    }
}

export const getMonthDays = (month: number, year: number): CalendarDayModel[] => {

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Определение предыдущего месяца и года
    const prevMonth: number = month === 0 ? 11 : month - 1;
    const prevYear: number = month === 0 ? year - 1 : year;

    const daysInPrevMonth: number = getDaysInMonth(prevYear, prevMonth);

    // Генерация ячеек календаря
    const days: CalendarDayModel[] = [];

    let cur_id = 0;

    // Добавление дней предыдущего месяца
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push(getDay(cur_id, daysInPrevMonth - i, prevMonth, prevYear, CalendarDayType.PrevMonthDay));
        cur_id++;
    }

    // Добавление дней текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
        days.push(getDay(cur_id, day, month, year, CalendarDayType.WorkDay));
        cur_id++;
    }

    // Дополнение ячеек днями следующего месяца, чтобы заполнить последнюю строку
    const remainingCells: number = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= remainingCells; i++) {
        days.push(getDay(cur_id, i, month + 1, year, CalendarDayType.NextMonthDay));
        cur_id++;
    }
    

    return days;
}