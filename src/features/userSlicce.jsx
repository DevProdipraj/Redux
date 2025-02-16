import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [], 
  reducers: {
    addUser(state, action) {
      state.push(action.payload);  
      console.log("User added:", action.payload);
    },
    removeUser(state, action) {
      return state.filter(user => user.id !== action.payload);  
    },
    removeAllUsers() {
      return [];  
    },
  },
});

export const { addUser, removeUser, removeAllUsers } = usersSlice.actions;
export default usersSlice.reducer;  
