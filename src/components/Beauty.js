// src/components/Beauty.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';
import ShopNav from './ShopNav';
import '../styles/ShopNav.css';
import useLoginRequirement from '../hooks/useLoginRequirement';
import '../styles/Category.css';

const Beauty = () => {
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
    <div className="custom-cards"> {/* Apply className="custom-cards" */}
      {products.beauty.map((product) => (
        <div className="custom-card" key={product.id}> {/* Apply className="custom-card" */}
          <img src={product.image} alt={product.title} /> {/* Make sure to add the alt attribute */}
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

export default Beauty;

// Similar components for Drinks.js and Food.js
