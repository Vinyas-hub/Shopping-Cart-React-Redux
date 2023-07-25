// src/reducers/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registeredUsers: [],
  isLoggedIn: false,
  currentUser: null, // We'll store the currently logged-in user data here
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload); // Add the new user data to the registeredUsers array
      state.isLoggedIn = true; // Set the isLoggedIn state to true after successful registration
      state.currentUser = action.payload; // Set the currentUser to the registered user data
      state.error = null; // Reset the error state after successful registration
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      // Find the user with the provided email and password in the registeredUsers array
      const user = state.registeredUsers.find(
        (user) => user.email === email && user.password.toLowerCase() === password.toLowerCase()
      );
      

      if (user) {
        state.isLoggedIn = true;
        state.currentUser = user; // Set the currentUser to the logged-in user data
        state.error = null;
      } else {
        state.error = 'User not registered. Please sign up first.';
      }
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      state.error = null;
    },
    updatePassword: (state, action) => {
      const { newPassword } = action.payload;
      // Find the index of the currently logged-in user in the registeredUsers array
      const index = state.registeredUsers.findIndex(user => user.email === state.currentUser.email);
      
      if (index !== -1) {
        // Update the password of the currently logged-in user in the registeredUsers array
        state.registeredUsers[index].password = newPassword;
        state.error = null;
      } else {
        state.error = 'User not found.';
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser, updatePassword, setError, clearError } = userSlice.actions;

export default userSlice.reducer;
