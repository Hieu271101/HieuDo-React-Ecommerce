import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart;

export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) => {
    return cartItems.reduce((count, item) => {
        return count + item.quantity;
    }, 0);
});

export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
});