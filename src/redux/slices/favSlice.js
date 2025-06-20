// src/redux/slices/favSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFav: (state, action) => {
      state.push(action.payload);
    },
    removeFromFav: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

// Named exports for actions
export const { addToFav, removeFromFav } = favSlice.actions;

// Default export for reducer
export default favSlice.reducer;
