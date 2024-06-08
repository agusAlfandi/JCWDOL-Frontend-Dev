import { configureStore } from "@reduxjs/toolkit";

import indomieReducer from "../feature/indomie/indomieSlice";
// import userReducer from "../feature/user/userSlice";

export const store = configureStore({
  reducer: {
    indomie: indomieReducer,
    // user: userReducer,
  },
});
