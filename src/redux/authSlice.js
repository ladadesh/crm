import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("token") || null, loader: false },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    showLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { login, logout, showLoader } = authSlice.actions;
export default authSlice.reducer;
