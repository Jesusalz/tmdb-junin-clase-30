/*

endpoint para listado de productos:

https://dummyjson.com/products/id
 

Datos que voy a mostrar para cada producto:

    - title
    - price
    - category
    - description
    - rating
    - thumbnail -- imagen en minuatura

*/
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "./services/product.service";

export function ProductDetailPage() {
  const { id } = useParams(); // en base a este id tengo que solicitar la informacion del producto.
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Inicio de la carga
      try {
        const res = await getProductById(id);

        console.log("data de la respuesta : ", res.data);

        const productDetail = res.data;
        setProduct(productDetail);
      } catch (error) {
        console.error("Error product detail api,", error);
      } finally {
        setIsLoading(false); // Fin de la carga
      }
    };

    fetchData();
  }, [id]); // este efecto tiene que ejecutarse cada vez que el valor de id cambie.

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-[70vw] mx-auto p-10">
      <Link className="underline" to={"/home"}>
        Volver
      </Link>
      <div className="space-y-3">
        <p className="text-xl">{product.title}</p>
        <hr />
        <p className="font-light"> {product.description}</p>

        <section className="flex justify-between text-xl">
          <p>$ {product.price}</p>
          <p>⭐ {product.rating}</p>
        </section>

        <div className="flex flex-col items-center bg-gray-200 rounded-md">
          {product.images.map((imageSrc) => (
            <img src={imageSrc} className="size-[200px] " />
          ))}
        </div>
      </div>
    </div>
  );
}
