
// src/reducers/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import productsData from '../products.json';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const initialState = {
  data: productsData, // Use the products data directly from the JSON file
  status: STATUSES.IDLE,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // No need for the async thunk since we are using productsData directly
  },
});

export default productSlice.reducer;
