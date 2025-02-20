import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name : "users",
    initialState : [],
    reducers : {
        addUsers(state, action){
            state.push(action.payload)
            console.log("User added from userSlice:", action.payload);
        },
        removeUser(state, action){
            return state.filter(user => user.id !== action.payload);  
        }
    }
})

export const {addUsers, removeUser} = usersSlice.actions
export default usersSlice.reducer