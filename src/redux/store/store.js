import { configureStore } from "@reduxjs/toolkit";
import cartHandler from "../reducers/cartHandler";

const store = configureStore({
  reducer: {
    cartHandler,
  },
});

export default store;
