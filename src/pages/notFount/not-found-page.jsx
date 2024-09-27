import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="h-screen w-full flex items-center pr-10 bg-sky-600">
      <section className="flex-grow h-full bg-sky-600 grid place-items-center">
        <div className=" flex flex-col items-center text-center text-white gap-8 ">
          <img src="/landing.webp" alt="" className="h-60" />

          <section>
            <h1 className="text-6xl font-bold">404 NOT FOUND</h1>
            <p className="text-lg font-light">
              Your visited page not found. You may go home page.
            </p>
          </section>

          <Link
            to="/home"
            className="bg-white text-sky-700 p-2 px-6 rounded-md font-semibold hover:bg-slate-200 transition-all duration-200"
          >
            Back to home page
          </Link>
        </div>
      </section>
    </div>
  );
}
