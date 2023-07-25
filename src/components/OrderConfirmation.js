// src/components/OrderConfirmation.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import CartNav from './CartNav';
const OrderConfirmation = () => {
  return (
    <>
    <CartNav/>
    <div className='confirmation'>
      <h2>Your order is confirmed.Thank you for shopping with us!</h2>
      
      <p>  <Link to="/">Click here</Link> to purchase any other item.</p>
     
    </div>
    </>
  );
};

export default OrderConfirmation;
