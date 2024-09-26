import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="h-screen w-full flex items-center pr-10 bg-sky-600">
      <section className="flex-grow h-full bg-sky-600 grid place-items-center">
        <div className=" flex flex-col items-center text-center text-white gap-4 ">
          <img src="/landing.webp" alt="" className="h-60" />

          <section>
            <h1 className="text-4xl font-bold">
              Bienvenido a nuestra tienda en línea
            </h1>
            <p className="text-lg font-light">
              Explora nuestros productos y descubre las mejores ofertas.
            </p>
          </section>
          <Link
            to="/home"
            className="bg-white text-sky-700 p-2 px-6 rounded-md font-semibold hover:bg-slate-200 transition-all duration-200"
          >
            Ingresar
          </Link>
        </div>
      </section>
    </div>
  );
}
