import { createSlice } from "@reduxjs/toolkit"
import { EventModel, EventState } from "../models/events"

interface EventsState {
    isLoading: boolean
    events: EventModel[]
    error?: string | undefined | null
}

const initialState: EventsState = {
    isLoading: false,
    events: [
        {
            id: 1,
            title: 'Мероприятие 1',
            description: 'Описание мероприятия 1',
            shortDescription: 'Краткое описание мероприятия 1',
            participants: 'Участники',
            coordinatorContact: 'Контакты координатора',
            image: './images/test.jpg',
            link: '',
            location: 'Еуыее фе йф ей ейе',
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now() + 86400000),
            state: EventState.Planned
        },
        {
            id: 2,
            title: 'Мероприятие 1',
            description: 'Описание мероприятия 1',
            shortDescription: 'Краткое описание мероприятия 1 Краткое описание мероприятия 1 Краткое описание мероприятия 1 Краткое описание мероприятия 1 Краткое описание мероприятия 1 Краткое описание мероприятия 1 Краткое описание мероприятия 1',
            participants: 'Участники',
            coordinatorContact: 'Контакты координатора',
            image: './images/test.jpg',
            link: '',
            location: '',
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now()),
            state: EventState.Passed
        }
    ],
    error: null
}

const eventsMainSlice = createSlice({
    name: 'eventsMain',
    initialState,
    reducers: { 
    }
})

export default eventsMainSlice.reducer