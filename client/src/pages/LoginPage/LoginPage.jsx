import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest.js";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 500); 
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-heading">Welcome back!</h1>
        <label className="login-label" htmlFor="">Username</label>
        <input
          className="login-input"
          name="username"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="login-label" htmlFor="">Password</label>
        <input
          className="login-input"
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" type="submit">Log in</button>

        {error && <p className="login-error">{error}</p>}
        {success && (
          <p className="login-success">You have successfully logged in!</p>
        )}

        <p className="login-text">Don't have an account?</p>
        <a className="login-link" href="/register">Register now!</a>
      </form>
    </div>
  );
};

export default LoginPage;
