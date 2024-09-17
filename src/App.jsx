import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  AboutUsPage,
  HomePage,
  ProjectPage,
  RegisterPage,
  LoginPage,
} from "./pages";

function App() {
  return (
    <main className="p-10">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </main>
  );
}

export default App;
