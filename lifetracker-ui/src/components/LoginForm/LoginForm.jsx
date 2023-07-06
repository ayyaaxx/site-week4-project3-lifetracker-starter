import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = ({ handleLogin, loginError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Access the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin(email, password);
    navigate("/activity"); 
  };

  return (
    <div className="login-form">
      <div className="welcome">
        <h2>Welcome</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          alt="user icon"
        />
      </div>
      {loginError && <p className="error-message">{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
