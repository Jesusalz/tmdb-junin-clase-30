import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  RegisterPage,
  LoginPage,
  ProductPage,
} from "./pages";

function App() {
  return (
    <main className="p-10">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </main>
  );
}

export default App;
