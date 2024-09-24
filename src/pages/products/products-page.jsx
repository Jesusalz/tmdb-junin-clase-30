/*

endpoint para listado de productos:

https://dummyjson.com/products


Formato de la respuesta:
        {
            products:[....], <============ aca esta el listao de productos
            total: number,
            skip: number,
            limit: number,
        }

Datos que voy a mostrar para cada producto:

    - title
    - price
    - category
    - stock
    - thumbnail -- imagen en minuatura

*/

import { useEffect, useState } from "react";
import { getAllProducts } from "./services/product.service";

export function ProductPage() {
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
    <div>
      <b>Productos</b>
      <hr />

      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex gap-3 items-center border rounded"
          >
            <img src={product.thumbnail} className="size-[100px]" />

            <div>
              <p>{product.title}</p>
              <p>$ {product.price}</p>
              <p>stock: {product.stock}</p>
              <p>category: {product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
