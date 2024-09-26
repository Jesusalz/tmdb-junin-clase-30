import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  RegisterPage,
  LoginPage,
  ProductPage,
  ProductDetailPage,
  UserPage,
} from "./pages";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </main>
  );
}

export default App;
