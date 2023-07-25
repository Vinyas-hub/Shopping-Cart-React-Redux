import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';
const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    city: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    city: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const { name, email, password, contact, city, address } = formData;
    const nameError = name ? '' : 'Name is required';
    const emailError = email ? '' : 'Email is required';
    const passwordError = password ? '' : 'Password is required';
    const contactError = contact ? '' : 'Contact is required';
    const cityError = city ? '' : 'City is required';
    const addressError = address ? '' : 'Address is required';

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      contact: contactError,
      city: cityError,
      address: addressError,
    });

    // If no errors, dispatch the signup action
    if (!nameError && !emailError && !passwordError && !contactError && !cityError && !addressError) {
      dispatch(registerUser(formData));
      // Reset form fields after successful signup
      setFormData({
        name: '',
        email: '',
        password: '',
        contact: '',
        city: '',
        address: '',
      });

      // Navigate to the login page after successful signup
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
    <h2 className="signup-heading">SIGN UP</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-field">
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-field">
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="form-field">
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleInputChange} />
        {errors.contact && <span className="error-message">{errors.contact}</span>}
      </div>
      <div className="form-field">
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>
      <div className="form-field">
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
        {errors.address && <span className="error-message">{errors.address}</span>}
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
    <div className="login-link">Already have an account? <Link to="/login">Login here</Link></div>
  </div>
  );
};

export default SignupForm;
