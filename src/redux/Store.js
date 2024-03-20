import cartSlice from "./slices/cartSlice";
import {configureStore} from "@reduxjs/toolkit";

export const Store = configureStore({
    reducer:{
        cart: cartSlice,
    }
})