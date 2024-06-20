import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.total = state.total + action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id!== action.payload.id);
            state.total = state.total - action.payload.price;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;