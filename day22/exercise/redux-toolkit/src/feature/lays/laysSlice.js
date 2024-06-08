import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfLays: 20,
};

const laysSlice = createSlice({
  name: "lays",
  initialState,
  reducers: {
    buy: (state) => {
      state.numOfLays -= 1;
    },
    restock: (state, action) => {
      state.numOfLays = state.numOfLays + action.payload;
    },
  },
});

export const { buy, restock } = laysSlice.actions;
export default laysSlice.reducer;
