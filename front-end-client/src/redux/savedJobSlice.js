// src/redux/savedJobsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchSavedJobs = createAsyncThunk(
  "savedJobs/fetch",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const res = await axios.get(`${BASE_URL}/jobs/saved`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSavedJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.loading = false;
      })
      .addCase(fetchSavedJobs.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default savedJobsSlice.reducer;
