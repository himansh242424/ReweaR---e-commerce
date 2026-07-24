import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";   // ✅ correct path

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
