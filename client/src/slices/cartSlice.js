import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
    },
    deleteText: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
  },
});

export const { addText, deleteText } = cardSlice.actions;

export default cardSlice.reducer;
