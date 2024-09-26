import React from "react";

export function Navbar() {
  return (
    <nav className="flex items-center  justify-between px-20 w-full h-20  bg-sky-600 text-white text-center fixed">
      <div>
        <img src="/landing.webp" className="size-20" />
      </div>
      <div className="flex items-center gap-4">
        <p>Home</p>
        <p>About Us</p>
        <p>Login</p>
      </div>
    </nav>
  );
}
