import { createSlice } from "@reduxjs/toolkit"
import { MediaModel } from "../models/media"

interface MediaState {
    isLoading: boolean
    media: MediaModel[]
    error?: string | undefined | null
}

const initialState: MediaState = {
    isLoading: false,
    media: [
        {
            id: 1,
            name: 'Документ 1',
            description: 'Описание документа 1',
            category: {
                id: 1,
                name: 'Категория 1'
            },
            image: './images/documents/doc-gray.png',
            link: ''
        },
        {
            id: 2,
            name: 'Документ 2 Документ 2 Документ 2',
            description: 'Описание документа 2',
            category: {
                id: 1,
                name: 'Категория 1'
            },
            image: './images/documents/doc-blue.jpg',
            link: ''
        },
        {
            id: 3,
            name: 'Документ 3',
            description: 'Описание документа 3',
            category: {
                id: 1,
                name: 'Категория 1'
            },
            image: './images/documents/doc-yellow.jpg',
            link: ''
        },
        {
            id: 4,
            name: 'Документ 3',
            description: 'Описание документа 3',
            category: {
                id: 1,
                name: 'Категория 1'
            },
            image: './images/documents/doc-yellow.jpg',
            link: ''
        },
        {
            id: 5,
            name: 'Документ 3',
            description: 'Описание документа 3',
            category: {
                id: 1,
                name: 'Категория 1'
            },
            image: './images/documents/doc-yellow.jpg',
            link: ''
        },
        {
            id: 6,
            name: 'Документ 3',
            description: 'Описание документа 3',
            category: {
                id: 1,
                name: 'Категория 1'
            },
            image: './images/documents/doc-yellow.jpg',
            link: ''
        }
    ],
    error: null
}


const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: { 
    }
})

export default mediaSlice.reducer