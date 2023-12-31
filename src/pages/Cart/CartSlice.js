import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            state.push(item);
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            return state.filter(item => item.id !== itemId);
        },
        clearCart: () => [],
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
