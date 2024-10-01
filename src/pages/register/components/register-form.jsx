import Password from "antd/es/input/Password";
import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services";
import { message } from "antd";

export function RegisterForm() {
  const nav = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [key]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      if (
        data.email === "" ||
        data.password === "" ||
        data.confirmPassword === "" ||
        data.name === ""
      ) {
        message.info("Faltan datos.");
        return;
      }

      if (data.password !== data.confirmPassword) {
        message.error("Las contraseñas no coinciden.");
        return;
      }
      const response = await register(registerData);

      nav("/login");
      message.success("ok");
    } catch (error) {
      if (error.status === 404) {
        return message.error("El mail ya se encuentra registrado!");
      }
      message.error("Error al crear usuario, intantlo mas tarde!");
      console.log("error STATS", error.status);
    }
  };
  return (
    <form
      className=" w-full flex flex-col gap-4 items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 w-full">
        <input
          placeholder="User Name"
          type="text"
          className="border-none outline-none rounded-sm p-2"
          onChange={handleInputChange}
          name="name"
          value={data.name}
        />
        <input
          placeholder="user@example.com"
          type="text"
          className="border-none outline-none rounded-sm p-2"
          onChange={handleInputChange}
          name="email"
          value={data.email}
        />
        <input
          placeholder="Set password"
          type="password"
          className="border-none outline-none rounded-sm p-2"
          onChange={handleInputChange}
          name="password"
          value={data.password}
        />
        <input
          placeholder="Confirm password"
          type="password"
          className="border-none outline-none rounded-sm p-2"
          onChange={handleInputChange}
          name="confirmPassword"
          value={data.confirmPassword}
        />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <button className="bg-white px-4 py-1 rounded-md font-semibold text-blue-500">
          Create account
        </button>
        <p className="text-white">
          Already have an account?{" "}
          <Link to={"/login"} className="underline font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </form>
  );
}
