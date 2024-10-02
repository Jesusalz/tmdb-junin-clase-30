import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; 


export const getUserLogged = async (token) => {
    return await axios.post(`${API_URL}/auth/me`, { token });
};


export const loginUser = async (formData) => {
    try {
      const response = await axios.post("https://junin-eccomerce-api.onrender.com/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      return response;
    } catch (error) {
      throw error; 
    }
  };


export const registerUser = async ({ name, username, email, password }) => {
    return await axios.post(`${API_URL}/auth/register`, {
      name, 
      username,
      email,
      password,
    });
  };
