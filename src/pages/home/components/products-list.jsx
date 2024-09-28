import { message } from "antd";
import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ProductList({ products = [] }) {
  const userLogged = useSelector((state) => state.user.userLogged);
  const nav = useNavigate();

  const handleAddToCart = () => {
    if (!(userLogged && userLogged.name)) {
      return nav("/login");
    }
    message.success("producto agregado al carrito!");
  };
  return (
    <div className="flex flex-wrap gap-2 max-h-[100%] overflow-auto p-4  ">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col  w-[200px] flex-grow  gap-3  bg-slate-50 rounded cursor-pointer hover:bg-slate-200 transition-all duration-150  "
        >
          <img src={product.thumbnail} className="w-3/4 mx-auto" />

          <div className="p-2 flex flex-col gap-2 items-start    flex-grow ">
            <p className="font-semibold text-sky-600 flex-grow  ">
              {product.title}
            </p>
            <div className="w-full space-y-2">
              <div className="flex justify-between w-full items-center bg-white rounded-md p-2">
                <p className=" text-sky-700 font-semibold">$ {product.price}</p>
                <span className="px-3  rounded-md bg-sky-400 text-xs font-semibold text-white ">
                  {" "}
                  {product.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-800">
                <button onClick={handleAddToCart}>
                  <FaCartPlus />
                </button>
                <button onClick={() => nav(`/products/${product.id}`)}>
                  <CgDetailsMore />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
