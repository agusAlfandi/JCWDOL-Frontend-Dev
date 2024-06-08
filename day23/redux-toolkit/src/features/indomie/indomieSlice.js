import { createSlice } from "@reduxjs/toolkit";

const initialState = createSlice({
  numOfindomie: 20,
});

const indomieSlice = createSlice({
  name: "indomie",
  initialState,
  reducers: {
    buyIndomie: (state) => {
      state.numOfIndomie -= 1;
    },
    restockIndomie: (state, action) => {
      state.numOfIndomie = state.numOfIndomie + action.payload;
    },
  },
});

export const { buyIndomie, restockIndomie } = indomieSlice.actions;
export default indomieSlice.reducer;
