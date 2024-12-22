import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./reducers/eventsReducer";
import eventsMainReducer from "./reducers/eventsMainReducer";
import mediaReducer from "./reducers/mediaReducer";
import mediaCategoriesReducer from "./reducers/mediaCategoriesReducer";

const rootReducer = combineReducers({
    eventsReducer,
    eventsMainReducer,
    mediaReducer,
    mediaCategoriesReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']