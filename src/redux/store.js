import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

export const store = configureStore({
    reducer: {
        cars:carReducer
    }
})