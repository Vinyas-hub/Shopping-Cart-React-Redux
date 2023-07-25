// src/components/Settings.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser, updatePassword } from '../reducers/userSlice';
import '../styles/Setting.css';
import CartNav from './CartNav';
const Settings = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the new password
    if (newPassword === confirmPassword) {
      // Dispatch the updatePassword action with the new password
      dispatch(updatePassword({ newPassword }));
      setNewPassword('');
      setConfirmPassword('');
      setPasswordError('');
      setChangePasswordSuccess(true); 
    } else {
      setPasswordError("Passwords don't match");
    }
  };

  const handleLogout = () => {
    // Dispatch the logoutUser action
    dispatch(logoutUser());
  };

  return (
    <>
<CartNav/>
    <div className='setting'>
      <h3>Change Password</h3>
      {changePasswordSuccess && <p style={{ color: 'green' }}>Password changed successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div>
         
          <input
            type="password"
            id="password" placeholder='Old Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
        
          <input
            type="password"
            id="newPassword" placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword" placeholder='Re-type New Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        <button type="submit">Change</button>
      </form>
     
    </div>
    </>
  );
};

export default Settings;
