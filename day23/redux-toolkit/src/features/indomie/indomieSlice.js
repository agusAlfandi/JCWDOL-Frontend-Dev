import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfindomie: 20,
};

export const indomieSlice = createSlice({
  name: "indomie",
  initialState,
  reducers: {
    addIndomie: (state) => {
      state.numOfindomie += 1;
    },
    buyIndomie: (state) => {
      state.numOfindomie -= 1;
    },
    restockIndomie: (state, action) => {
      state.numOfindomie += action.payload;
    },
  },
});

export const { addIndomie, buyIndomie, restockIndomie } = indomieSlice.actions;
export default indomieSlice.reducer;
