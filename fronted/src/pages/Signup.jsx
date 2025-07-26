import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // make sure this is still imported

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here you’ll call your backend API
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <InputField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button text="Sign Up" type="submit" />
        </form>
        <div className="signup-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

// --- Embedded InputField Component ---
const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        className="input-box"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

// --- Embedded Button Component ---
const Button = ({ text, type }) => {
  return (
    <button type={type} className="button-primary">
      {text}
    </button>
  );
};

export default Signup;
