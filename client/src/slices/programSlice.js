import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const programslice = createSlice({
  name: "programData",
  initialState,
  reducers: {
    addMemory: (state, action) => {
      state.push(action.payload);
    },
    deleteMemory: (state, action) => {
      state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addMemory, deleteMemory } = programslice.actions;

export default programslice.reducer;
