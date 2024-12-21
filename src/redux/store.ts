import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./reducers/eventsReducer";
import eventsMainReducer from "./reducers/eventsMainReducer";

const rootReducer = combineReducers({
    eventsReducer,
    eventsMainReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']