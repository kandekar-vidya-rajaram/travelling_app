import React, { useState } from "react";
import '../App.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
      // You can add your API login logic here
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {errors.username && <p className="error">{errors.username}</p>}

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="btn btn-primary login-button">
          Log In
        </button>

        <div className="separator">
          <span>Or</span>
        </div>

        <p className="signup-link">
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;