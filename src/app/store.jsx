import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/userSlicce"

const store = configureStore({
    reducer: {
        users: usersSlice,
    }
})

export default store








