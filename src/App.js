// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Beauty from './components/Beauty';
import Foods from './components/Foods';
import Drinks from './components/Drinks';
import Cart from './components/Cart';
import Settings from './components/Settings';
import OrderConfirmation from './components/OrderConfirmation';
const App = () => {
  return (
    
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/beauty" element={<Beauty/>} />
          <Route path="/food" element={<Foods/>} />
          <Route path="/drinks" element={<Drinks/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/logout" element={<Home/>} />
        </Routes>
      </Router>
    
  );
};

export default App;

