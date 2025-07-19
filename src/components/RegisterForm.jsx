import React, { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Registration Successful!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      
      <label>Username</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <label>Confirm Password</label>
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
