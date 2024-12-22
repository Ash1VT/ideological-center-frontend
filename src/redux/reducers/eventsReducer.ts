import { createSlice } from "@reduxjs/toolkit"
import { EventState, EventsYearModel } from "../models/events"

interface EventsState {
    isLoading: boolean
    events: EventsYearModel[]
    error?: string | undefined | null
}

const initialState: EventsState = {
    isLoading: false,
    events: [
        {
            year: 2025,
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
            ]
        },
        {
            year: 2022,
            events: [
                {
                    id: 3,
                    title: 'Мероприятие 1',
                    description: 'Описание мероприятия 1',
                    shortDescription: 'Краткое описание мероприятия 1',
                    participants: 'Участники',
                    coordinatorContact: 'Контакты координатора',
                    image: './images/test.jpg',
                    link: '',
                    location: '',
                    startDate: new Date(Date.now()),
                    endDate: new Date(Date.now()),
                    state: EventState.Passed
                },
                {
                    id: 4,
                    title: 'Мероприятие 1',
                    description: 'Описание мероприятия 1',
                    shortDescription: 'Краткое описание мероприятия 1',
                    participants: 'Участники',
                    coordinatorContact: 'Контакты координатора',
                    image: './images/test.jpg',
                    link: '',
                    location: '',
                    startDate: new Date(Date.now()),
                    endDate: new Date(Date.now()),
                    state: EventState.Passed
                }
            ]
        }
    ],
    error: null
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: { 
    }
})

export default eventsSlice.reducer