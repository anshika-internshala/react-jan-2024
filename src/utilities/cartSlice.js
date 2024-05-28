import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id == action.payload.id);
      const data = { ...action.payload, quantity: 1 };
      !item ? state.items.push(data) : item.quantity++;
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id == action.payload.id);
      item.quantity--;
      if (item.quantity == 0) {
        const arr = state.items.filter(item => item.id !== action.payload.id);
        state.items = arr;
      }
    },
    clearCart: () => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
