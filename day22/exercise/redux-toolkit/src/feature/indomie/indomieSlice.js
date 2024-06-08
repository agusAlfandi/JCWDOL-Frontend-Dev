import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIndomie: 20,
};

const indomieSlice = createSlice({
  name: "indomie",
  initialState,
  reducers: {
    buy: (state) => {
      state.numOfIndomie -= 1;
    },
    restock: (state, action) => {
      state.numOfIndomie = state.numOfIndomie + action.payload;
    },
  },
});

// const extraReducer = indomieSlic e.extraReducers;

export const { buy, restock } = indomieSlice.actions;
export default indomieSlice.reducer;
