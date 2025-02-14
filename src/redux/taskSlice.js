import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks } from "../utils/taskApi";

// Async thunk for fetching tasks
export const fetchTasksAsync = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const response = await fetchTasks(); // Make sure fetchTasks() is defined
    return response?.tasks; // Return only the tasks
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { isOpen: false, tasks: [], status: "idle", error: null },
  reducers: {
    handleTaskPopup: (state, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasksAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { handleTaskPopup } = taskSlice.actions;
export default taskSlice.reducer;
