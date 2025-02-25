import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../freature/userSlice"; // Ensure correct import path

const store = configureStore({
  reducer: {
    users: userSlice.reducer, // Fix: Correctly set reducer
  },
});

export default store;
