
// src/reducers/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    confirmCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, confirmCart } = cartSlice.actions;
export default cartSlice.reducer;
