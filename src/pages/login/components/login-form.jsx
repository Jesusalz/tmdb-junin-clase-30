import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/login.service";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../../store/userSlice";
export function LoginForm() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    try {
      if (data.email === "" || data.password === "") {
        message.info("Faltan datos.");
        return;
      }
      setIsLoading(true);
      const response = await login(data);
      console.log("respuesta del Login", response.data);
      const accessToken = response.data.backendTokens.accessToken;
      localStorage.setItem("accessToken", accessToken);
      dispatch(setUserLogged(response.data.user));
      nav("/home");
    } catch (error) {
      message.error("Credenciales invalidas");
      console.log("error at login", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className=" w-full flex flex-col gap-4 items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 w-full">
        <input
          placeholder="user@example.com"
          type="text"
          className="border-none outline-none rounded-sm p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="*****"
          type="password"
          className="border-none outline-none rounded-sm p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <button
          className={`bg-white px-4 py-1 rounded-md font-semibold text-blue-500 ${
            isLoading ? "opacity-40" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "cargando.." : "Log in"}
        </button>
        <p className="text-white">
          You dont have account?{" "}
          <Link to={"/register"} className="underline font-semibold">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
