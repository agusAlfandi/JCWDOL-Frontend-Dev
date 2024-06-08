import { configureStore } from "@reduxjs/toolkit";
import indomieSlice from "../features/indomie/indomieSlice";

const store = configureStore({
  reducer: {
    indomieSlice,
  },
});

export default store;
