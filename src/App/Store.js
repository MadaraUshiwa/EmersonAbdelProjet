import { configureStore } from "@reduxjs/toolkit";
import DataSlice from '../features/DataSlice/DataSlice'
import LoginSlice from '../features/LoginSlice/LoginSlice'

const store = configureStore ({
    reducer: {
        data: DataSlice,
        login: LoginSlice
    }
})

export default store;


