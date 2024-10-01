import React from "react";
import { FaHeart, FaSearch, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUserLoggedData } from "../../../store/userSlice";

export function Navbar() {
  const userLogged = useSelector((state) => state.user.userLogged);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    // limpiar localstorage, limpiar nuestro estado global y irnos a /login.
    localStorage.removeItem("accessToken");
    dispatch(clearUserLoggedData());
    nav("/login");
  };
  return (
    <nav className="flex items-center  justify-between gap-10 px-20 w-full h-20  bg-sky-600 text-white text-center ">
      <div>
        <img src="/landing.webp" className="size-20" />
      </div>
      <div className="flex items-center  flex-grow  justify-end gap-4">
        <Link to={"/home"}>Home</Link>
        <Link to={"/home/about-us"}>About Us</Link>
        <Link to={"/home/contact"}>Contact</Link>
      </div>

      <section className="flex items-center gap-4">
        <div className="flex items-center relative bg-slate-100 text-gray-600 rounded-md p-2  w-64">
          <FaSearch className="absolute right-2" />
          <input
            type="text"
            className="bg-transparent  rounded-md pr-8 pl-2 py-1 outline-none text-sm w-full"
            placeholder="What are you looking for?"
          />
        </div>
        {userLogged && userLogged.name ? (
          <div className="text-sm flex gap-4 h-full">
            <button>
              <FaHeart />
            </button>
            <button>
              <FaCartShopping />
            </button>
            <button className="flex items-center text-sm">
              <FaUser />
              <span>{userLogged.name}</span>
            </button>
            <button className="flex items-center gap-1" onClick={handleLogOut}>
              <FaSignOutAlt />
              <span className="text-sm">Log out</span>
            </button>
          </div>
        ) : null}
      </section>
    </nav>
  );
}
