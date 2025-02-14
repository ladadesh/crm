import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { isOpen: false },
  reducers: {
    handleTaskPopup: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { handleTaskPopup } = taskSlice.actions;
export default taskSlice.reducer;
