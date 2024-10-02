import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};
