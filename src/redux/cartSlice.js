import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        total: 0,
        tax: 8
    },
    reducers: {
        addToCart: (state, action) => {
            const findCartItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );

            if (findCartItem) {
                findCartItem.quantity = findCartItem.quantity + 1;
            } else {
                state.cartItems.push(action.payload);
            }

            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload._id
            );

            state.total -= action.payload.price * action.payload.quantity;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;