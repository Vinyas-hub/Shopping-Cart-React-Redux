import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, setError, clearError } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registeredUsers = useSelector((state) => state.user.registeredUsers);
  const error = useSelector((state) => state.user.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    let isValid = true;
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    if (isValid) {
      const user = registeredUsers.find((user) => user.email === email && user.password === password);
      if (user) {
        dispatch(loginUser({ email, password }));
        // Reset form fields after successful login
        setEmail('');
        setPassword('');
        dispatch(clearError()); // Clear any previous login error
        navigate('/'); // Redirect to the home page after successful login
      } else {
        dispatch(setError('User not registered. Please sign up first.'));
      }
    } else {
      // Dispatch the errors to Redux store to show them on the form
      dispatch(setError(errors));
    }
  };

  return (
    <div className='login'>
      <h2 className='login-heading'>Login</h2>
      {error && typeof error === 'string' ? (
        <span style={{ color: 'red' }}>{error}</span>
      ) : (
        <div>
          <p>Login to make a purchase</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='textfield'>
          {/* <label>Email</label> */}
          <input type="email" name="email" placeholder="E-mail" value={email} onChange={handleInputChange} />
          {error && error.email && <span style={{ color: 'red' }}>{error.email}</span>}
        </div>
        <div className='textfield'>
          {/* <label>Password</label> */}
          <input type="password" name="password" placeholder="Password" value={password} onChange={handleInputChange} />
          {error && error.password && <span style={{ color: 'red' }}>{error.password}</span>}
        </div>
        <button className='button' type="submit">Login</button>
      </form>
      <div className='text-2'> 
        Don't have an account? <Link to="/signup">Register</Link>
      </div>
      {error && typeof error === 'object' && Object.keys(error).length > 0 && (
        <div className='alert-message'>Please fix the form errors.</div>
      )}
    </div>
  );
};

export default LoginForm;
