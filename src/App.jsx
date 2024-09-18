import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage, HomePage, RegisterPage, LoginPage } from "./pages";

function App() {
  return (
    <main className="p-10">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
  );
}

export default App;
