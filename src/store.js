// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
 import productReducer from './reducers/productSlice';
 import cartReducer from './reducers/cartSlice';
 const store = configureStore({
  reducer: {
    cart:cartReducer,
    user: userReducer,
    product: productReducer
  },
});

export default store;
