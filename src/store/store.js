import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addToCart, removeFromCart, clearCart } from '../pages/Cart/CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        // other reducers...
    },
});

export default store;