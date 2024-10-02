import React, { useState } from "react";
import { loginUser } from "../../../services/auth.service"; 
import { useNavigate, Link } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../../store/userSlice"; 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUser(formData);
      console.log("Respuesta del servidor:", response.data);
      dispatch(setUserLogged(response.data.user));
      navigate("/home"); 
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Error desconocido");
      } else {
        setError("Error desconocido");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center" }}>Iniciar Sesión</h2>
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>
      <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Iniciar Sesión
      </button>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <span>¿No tienes una cuenta? </span>
        <Link to="/register" style={{ color: "#007bff" }}>Regístrate aquí</Link>
      </div>
    </form>
  );
};

export default LoginForm;
