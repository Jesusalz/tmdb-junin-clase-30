import axios from "axios"
const API_URL =  import.meta.env.VITE_API_URL;
export const getUserLogged = async (token) =>{
    return await  axios.post(`${API_URL}/auth/me`, {token})
}