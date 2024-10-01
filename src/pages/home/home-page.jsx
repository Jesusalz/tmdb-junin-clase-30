import { useState, useEffect } from "react";
import { getAllProducts } from "./services";
import { ProductList, Navbar } from "./components";
export function HomePage() {
  const [products, setProducts] = useState([]); // Estado donde voy a guaradar el listado de productos.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Tengo que hacer un efecto para solicitar la info.
    //creo la function para hacer el 'fetch' de la informacion. Recordemos, es una funcion async. usp trycatch

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllProducts(); // =  await axios.get('https://dummyjson.com/products')
        // console.log("Product response:  ", res); // antes de hacer algo, veo la respuesta en consola.
        const data = res.data; // Recordemos que la 'DATA' de que queremos se encutra en la propedad 'data'
        // console.log("Products data:  ", data);
        const productList = data.products; // el listado de productos se encuetnra dentro de la propiedad 'products'
        setProducts(productList); // CARGO MI ESTADO LOCAL CON EL LISTADO DE PRODUCTOS DE LA API.
      } catch (error) {
        console.error("Error en la api", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container  ">
      <Navbar />
      <div className="mx-auto w-[80vw] pt-20 ">
        {loading ? (
          <div className="flex flex-col items-center m-4 font-semibold text-gray-400">
            <div className="size-10 border border-sky-500 border-l-0 rounded-full animate-spin"></div>
            <span>Loading ..</span>
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
}
