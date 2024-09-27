import { useState, useEffect } from "react";
import { getAllProducts } from "./services";
import { ProductList, Navbar } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogged } from "../../services";
import { setUserLogged } from "../../store/userSlice";
import { Route, Routes } from "react-router-dom";
import { AboutUsPage } from "./pages";
export function HomePage() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        const userLogged = await getUserLogged(accessToken);
        dispatch(setUserLogged(userLogged.data));
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    // Tengo que hacer un efecto para solicitar la info.
    //creo la function para hacer el 'fetch' de la informacion. Recordemos, es una funcion async. usp trycatch

    const fetchData = async () => {
      try {
        const res = await getAllProducts(); // =  await axios.get('https://dummyjson.com/products')
        // console.log("Product response:  ", res); // antes de hacer algo, veo la respuesta en consola.
        const data = res.data; // Recordemos que la 'DATA' de que queremos se encutra en la propedad 'data'
        // console.log("Products data:  ", data);
        const productList = data.products; // el listado de productos se encuetnra dentro de la propiedad 'products'
        setProducts(productList); // CARGO MI ESTADO LOCAL CON EL LISTADO DE PRODUCTOS DE LA API.
      } catch (error) {
        console.error("Error en la api", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="   ">
      <Navbar />
      <div className="mx-auto  w-[80vw]  pt-20  ">
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
    </div>
  );
}
