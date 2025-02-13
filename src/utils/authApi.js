import api from "./api";

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data.token;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
