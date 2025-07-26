import React, { useState } from 'react';
import '../App.css';  // or just remove the line if App.css is already imported globally


const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Signed Up Successfully!');
      // Logic for signup submission here
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-wrapper">
          <i className="bi bi-person"></i>
          <input
            type="text"
            placeholder="User Name"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        {errors.username && <div className="error-text">{errors.username}</div>}

        <div className="input-wrapper">
          <i className="bi bi-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        {errors.email && <div className="error-text">{errors.email}</div>}

        <div className="input-wrapper">
          <i className="bi bi-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        {errors.password && <div className="error-text">{errors.password}</div>}

        <button type="submit" className="btn btn-primary">Sign UP</button>

        <div className="or-divider">Or</div>

<button className="google-btn">
 <img
  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
  alt="Google"
  style={{ width: '20px', height: '20px', marginRight: '10px' }}
/>
  Continue with Google
</button>


        <div className="footer-text">
          Already have an account? <strong>Log In</strong>
        </div>
      </form>
    </div>
  );
};

export default Signup;
