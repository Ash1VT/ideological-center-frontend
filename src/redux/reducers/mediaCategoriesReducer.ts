import { createSlice } from "@reduxjs/toolkit"
import { MediaCategoryModel } from "../models/media"

interface MediaCategoriesState {
    isLoading: boolean
    mediaCategories: MediaCategoryModel[]
    error?: string | undefined | null
}

const initialState: MediaCategoriesState = {
    isLoading: false,
    mediaCategories: [
        {
            id: 1,
            name: "Category 1"
        },
        {
            id: 2,
            name: "Category 2"
        },
        {
            id: 3,
            name: "Category 3"
        },
        {
            id: 4,
            name: "Category 3"
        }
    ],
    error: null
}


const mediaCategoriesSlice = createSlice({
    name: 'mediaCategories',
    initialState,
    reducers: { 
    }
})

export default mediaCategoriesSlice.reducer