import { configureStore } from "@reduxjs/toolkit";
import usersSlice  from "../feature/UsersSlice";
const store = configureStore({
    reducer : {users : usersSlice}
})

export default store