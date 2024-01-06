import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";

export const store  = configureStore({
    reducer:{
        cart: CartSlice.reducer, //idhr .reducer lihkne se product mai jo cart main error aa rha tha woh kaise hta reducer ka matlab kya hai idhr kya ho rha hai isse?
    }
});