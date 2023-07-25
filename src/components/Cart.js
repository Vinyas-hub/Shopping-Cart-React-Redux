
// src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart ,confirmCart} from '../reducers/cartSlice';
import OrderConfirmation from './OrderConfirmation';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';
import CartNav from './CartNav';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleConfirmOrder = () => {
    
    navigate('/order-confirmation');
  };

  return (
    <div>
<CartNav/>
    <div className="cartWrapper">
      <table>
        <thead>
          <tr>
            <th>Item Number</th>
            <th>Item Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>Rs.{item.price}</td>
              
            </tr>
          ))}
          <tr>
            <td colSpan="2">Total</td>
            <td>Rs. {totalPrice.toFixed(2)}</td>
            <td><button className="bttn" onClick={handleConfirmOrder}>
                    Confirm Order
                  </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Cart;
