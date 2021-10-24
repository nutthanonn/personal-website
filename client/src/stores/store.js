import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
