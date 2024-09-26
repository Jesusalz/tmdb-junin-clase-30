import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function RegisterForm() {
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      nav("/login");
    } catch (error) {
      console.log("error at login", error);
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
        />
        <input
          placeholder="user@example.com"
          type="text"
          className="border-none outline-none rounded-sm p-2"
        />
        <input
          placeholder="Set password"
          type="password"
          className="border-none outline-none rounded-sm p-2"
        />
        <input
          placeholder="Confirm password"
          type="password"
          className="border-none outline-none rounded-sm p-2"
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
