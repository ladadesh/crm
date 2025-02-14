import axios from "axios";
import store from "../redux/store"; // Import Redux store
import { showLoader } from "../redux/authSlice"; // Import loader action

const api = axios.create({
  baseURL: "https://ezycrm.webezy.co.uk/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  store.dispatch(showLoader(true)); // ✅ Show Loader when request starts
  return config;
});

api.interceptors.response.use(
  (response) => {
    store.dispatch(showLoader(false)); // ✅ Hide Loader on success
    return response;
  },
  (error) => {
    store.dispatch(showLoader(false)); // ✅ Hide Loader on error
    return Promise.reject(error);
  }
);

export default api;
