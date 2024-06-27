import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, id: state.products.length + 1 });
    },
    deleteLatestProduct: (state) => {
      if (state.products.length > 0) {
        state.products.pop();
      }
    },
    deleteRowProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    }
  }
});

export const { addProduct, deleteLatestProduct, deleteRowProduct, updateProduct } = productSlice.actions;

export default productSlice.reducer;
