import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API Call
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data; 
});

const userSlice = createSlice({
  name: "users", 
  initialState: {
    users: [],
    status: "idle", // idle | loading | succeeded | failed
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload; // Fix: Properly update state
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.isError = true;
        console.error("Error fetching users:", action.error.message);
      });
  },
});

export default userSlice;
