import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/ShopNav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../reducers/userSlice';

const ShopNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const handleLogout = () => {
    // Dispatch the logoutUser action
    dispatch(logoutUser());
  };

  return (
    <>
      <nav className="top-navbar">
        <h3 className="navbar-heading">
          <Link to="/">Pure Feel</Link>
        </h3>
        <div className="navbar-link">
          {isLoggedIn ? (
            <>
              <div className="icons-container">
                <Link to="/cart">
                  <ShoppingCartIcon style={{ color: '#ccc' }} />
                  Cart
                </Link>
              </div>
              <div className="icons-container">
                <Link to="/settings">
                  <SettingsIcon style={{ color: '#ccc' }} />
                  Settings
                </Link>
              </div>
              <div className="icons-container" onClick={handleLogout}>
              <Link to="/logout">
                <ExitToAppIcon style={{ color: '#ccc' }} />
                Logout
                </Link>
              </div>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
      <div className="welcome">
        <h1>Welcome to our Pure Feel store!</h1>
        <p>
          we have the best products for you. No need to hunt it around, we have all in one place.
        </p>
      </div>
    </>
  );
};

export default ShopNav;

