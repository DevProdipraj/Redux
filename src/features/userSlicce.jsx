import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser(state, action) { },
        removeUser(state, action) { },
        removeAlluser(state, action) { },
    }
    
})

console.log(usersSlice.actions);

export { usersSlice }


