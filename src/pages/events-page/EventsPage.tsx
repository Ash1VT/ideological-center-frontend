import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import styles from './EventsPage.module.scss'
import EventsMenu from './events-menu/EventsMenu'
import EventsMenuContent from './events-menu-content/EventsMenuContent'
import PageHeader from 'src/components/page-header/PageHeader'
import { EventModel, EventStatus, EventsYearModel } from 'src/models/events'
import useCalendar from './events-calendar/hooks/useCalendar'
import useFetchData from 'src/hooks/useFetchData'
import { EventService } from 'src/services/EventService'
import Loader from 'src/components/loader/Loader'

const EventsPage = () => {
    const now = new Date(Date.now())
    const month = now.getMonth()
    const year = now.getFullYear()

    const [lastFetchedYear, setLastFetchedYear] = useState(year)
    const [selectedItem, setSelectedItem] = useState(2)
    
    const [totalEventsCount, setTotalEventsCount] = useState(0)
    
    const { selectedMonth, selectedYear, selectedDay, monthsData, onMonthSelected, onDaySelected, onYearSelected } = useCalendar(month, year, async (month: number) => {
        
    }, async (year: number) => {
        if (year >= lastFetchedYear) {
            return
        }

        setLastFetchedYear(year)
    });

    const {isLoading, data: events, fetchAdditional: fetchAdditionalEvents} = useFetchData<EventsYearModel[]>(async () => {
        const startDate = new Date(lastFetchedYear, 0, 1)
        const endDate = new Date(lastFetchedYear, 11, 31)

        const data = await EventService.retrieveEvents(undefined, undefined, undefined, startDate, endDate)
        setTotalEventsCount(data.totalCount)
        return groupEventsByYear(data.items)

    }, [], {isArrayData: true})

    useLayoutEffect(() => {
        fetchAdditionalEvents?.()
    }, [lastFetchedYear])


    const eventsMenuItems = [
        {
            id: 1,
            label: 'Календарь мероприятий'
        },
        {
            id: 2,
            label: 'Список мероприятий'
        }
    ]

    function groupEventsByYear(events: EventModel[]): EventsYearModel[] {
        // Create a map to group events by year
        const eventsByYear: Map<number, EventModel[]> = new Map();
    
        events.forEach(event => {
            const year = event.startDate.getFullYear(); // Extract the year from the start date
            if (!eventsByYear.has(year)) {
                eventsByYear.set(year, []);
            }
            eventsByYear.get(year)!.push(event);
        });
    
        // Transform the map into an array of EventsYearModel
        const groupedEvents: EventsYearModel[] = Array.from(eventsByYear, ([year, events]) => ({
            year,
            events,
        }));
    
        // Sort by year (optional)
        return groupedEvents.sort((a, b) => a.year - b.year);
    }

    const getEventsCount = useCallback((events: EventsYearModel[]): number => {
        let count = 0;
        events.forEach(event => {
            count += event.events.length;
        });
        return count;
    }, [events])


    const onShowPrevYearEvents = async () => {
        setLastFetchedYear(lastFetchedYear - 1);
    }


    return (
        <div className={styles.container}>
            <PageHeader title='Афиша мероприятий' image='./images/pages/events.jpg'/>
            <EventsMenu items={eventsMenuItems} selectedItem={selectedItem} onItemSelected={setSelectedItem}/>
            <Loader isLoading={events.length === 0 && isLoading}>
                <EventsMenuContent isLoading={events.length !== 0 && isLoading} 
                                   selectedItem={selectedItem} 
                                   selectedMonth={selectedMonth} 
                                   selectedYear={selectedYear} 
                                   monthsData={monthsData} 
                                   selectedDay={selectedDay}
                                   onCalendarDaySelected={onDaySelected}
                                   onCalendarMonthSelected={onMonthSelected}
                                   onCalendarYearSelected={onYearSelected}
                                   events={events} 
                                   showPrevYearButtonVisible={totalEventsCount > getEventsCount(events)}
                                   onShowPrevYearEvents={onShowPrevYearEvents}/>
            </Loader>
        </div>
    )
}

export default EventsPage
