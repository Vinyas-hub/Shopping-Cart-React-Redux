// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Add a CSS file for styling
import Foods from './Foods';
import Drinks from './Drinks';
import Beauty from './Beauty';
import BeautyImage from '../img/Beauty/Bath.jpg';
import DrinksImage from '../img/Beverages/Beverage.jpg';
import FoodImage from '../img/Food/Food.jpg';
const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <h3 className='logo'>Pure feel</h3>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/beauty">Beauty</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/food">Food</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/settings">settings</Link>
          </li>
        </ul>
      </nav>
      <div id="banner" className="banner full-screen-mode parallax">
            <div className="container pr">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="banner-static">
                    <div className="banner-text">
                    <div className="banner-cell">
                        <h2 >We sell Pure natural products </h2>
                        <p>Flat 40% OFF on all products</p>
                        <div className="book-btn">
                     
                        <a href="#" className="table-btn hvr-underline-from-center">Shop Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="custom-category-cards"> {/* Apply className="custom-category-cards" */}
      <Link to="/beauty">
        <div className="custom-category-card"> {/* Apply className="custom-category-card" */}
          <img src={BeautyImage} alt="Beauty Products" />
          <h3>Bath & Beauty</h3>
          <p>Original Beauty products from the best brands</p>
        </div>
      </Link>
      <Link to="/drinks">
        <div className="custom-category-card"> {/* Apply className="custom-category-card" */}
          <img src={DrinksImage} alt="Drinks" />
          <h3>Beverages</h3>
          <p>Choose among the best available beverages.</p>
        </div>
      </Link>
      <Link to="/food">
        <div className="custom-category-card"> {/* Apply className="custom-category-card" */}
          <img src={FoodImage} alt="Food" />
          <h3>Food</h3>
          <p>Pure and healthy Food.</p>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Home;
