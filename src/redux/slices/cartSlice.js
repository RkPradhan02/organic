// src/redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      const discountedPrice = newItem.unitPrice;

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = parseFloat(
          (existingItem.quantity * discountedPrice).toFixed(2)
        );
      } else {
        state.push({
          ...newItem,
          totalPrice: parseFloat((newItem.quantity * discountedPrice).toFixed(2)),
        });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart() {
      return [];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;