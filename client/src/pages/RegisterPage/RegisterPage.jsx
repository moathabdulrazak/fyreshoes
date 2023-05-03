import React, { useState } from "react";
import upload from "../../utils/upload";
import "./RegisterPage.css";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="********"
            onChange={handleChange}
            required
          />
          <label htmlFor="img">Profile Picture</label>
          <input
            name="img"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
