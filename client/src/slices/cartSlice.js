import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
    },
    deleteText: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
  },
});

export const { addText, deleteText } = cartSlice.actions;

export default cartSlice.reducer;
