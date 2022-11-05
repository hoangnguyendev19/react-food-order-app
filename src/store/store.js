import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import commentSlice from './review-comments/commentSlice';
import cartSlice from './shopping-cart/cartSlice';
import cartUiSlice from './shopping-cart/cartUiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice,
    comment: commentSlice,
    auth: authSlice,
  },
});

export default store;
