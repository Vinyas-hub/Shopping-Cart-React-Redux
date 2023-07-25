/* CartNav.js */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/ShopNav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const CartNav = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const cartItems = useSelector((state) => state.cart); // Get the cartItems array
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`top-navbar ${menuOpen ? 'open' : ''}`}>
      <h3 className="navbar-heading"><Link to="/">Pure Feel</Link></h3>
      <div className={`navbar-link ${menuOpen ? 'open' : ''}`}>
        {isLoggedIn ? (
          <>
          
            <div className="icons-container">
              <Link to="/cart">
                <ShoppingCartIcon style={{ color: '#ccc' }} />
                Cart({cartItems.length}) {/* Display the cart number */}
              </Link>
            </div>
            <div className="icons-container">
              <Link to="/settings">
                <SettingsIcon style={{ color: '#ccc' }} />
                Settings
              </Link>
            </div>
            <div className="icons-container">
              <Link to="/logout">
                <ExitToAppIcon style={{ color: '#ccc' }} />
                Logout
              </Link>
            </div>
          </>
        ) : (
          <Link to="/home"></Link>
        )}
      </div>
      <button className="hamburger-menu" onClick={handleMenuClick}>
        &#9776;
      </button>
    </nav>
  );
};

export default CartNav;
