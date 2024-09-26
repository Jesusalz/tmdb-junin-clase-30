import axios from "axios";

const API_URL =  import.meta.env.VITE_API_URL;

// Funcion para obtener el listado de productos.
export const getAllProducts = async ()=>{
    return await axios.get(`${API_URL}/products`);
}

// Funcion para obtener el detalle de un producto por ID.
export const getProductById = async (id)=>{
    return await axios.get(`${API_URL}/products/${id}`);
}