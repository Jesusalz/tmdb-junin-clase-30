import { useState, useEffect } from "react";
import { getAllProducts } from "./services";
import { ProductList, Navbar } from "./components";
export function HomePage() {
  const [products, setProducts] = useState([]); // Estado donde voy a guaradar el listado de productos.

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
    <div className="container  ">
      <Navbar />
      <div className="mx-auto w-[80vw] pt-20 ">
        <ProductList products={products} />
      </div>
    </div>
  );
}
