import { configureStore } from "@reduxjs/toolkit";
import programSlice from "../slices/programSlice";

export const store = configureStore({
  reducer: {
    program: programSlice,
  },
});
