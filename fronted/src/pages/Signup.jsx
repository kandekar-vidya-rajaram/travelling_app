import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call or logic here
    console.log('Signup form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
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
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button text="Sign Up" type="submit" />
        </form>
        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
