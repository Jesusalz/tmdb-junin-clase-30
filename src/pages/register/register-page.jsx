import React from "react";
import { RegisterForm } from "./components";

export function RegisterPage() {
  return (
    <section className="flex h-screen w-screen">
      <div className="bg-blue-100 h-full w-1/2 grid place-items-center">
        <p className="font-semibold text-5xl">Products App</p>
      </div>
      <div className="bg-blue-400 h-full w-1/2 grid place-items-center">
        <section className=" w-1/2 flex flex-col gap-4 items-center">
          <p className="font-semibold text-white text-3xl">Register</p>
          <RegisterForm />
        </section>
      </div>
    </section>
  );
}
