// src/components/Foods.js (and other category components)
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';
import useLoginRequirement from '../hooks/useLoginRequirement';
import ShopNav from './ShopNav';
import '../styles/ShopNav.css';
import '../styles/Category.css';
const Foods = () => {
    useLoginRequirement();
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  if (status === 'loading') {
    return <h2>Loading....</h2>;
  }

  if (status === 'error') {
    return <h2>Something went wrong!</h2>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
    <ShopNav/>
    
    <div className="custom-cards">
      {products.food.map((product) => (
        <div className="custom-card" key={product.id}>
          <img src={product.image}  />
          <h4>{product.title}</h4>
          <h5>Rs.{product.price}</h5>
          <button className="btn" onClick={() => handleAddToCart(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Foods;
