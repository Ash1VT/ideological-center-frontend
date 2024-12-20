import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./reducers/eventsReducer";

const rootReducer = combineReducers({
    eventsReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']